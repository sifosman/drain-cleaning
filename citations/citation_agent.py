import json
import asyncio
from playwright.async_api import async_playwright

async def fill_form(page, profile, selectors):
    """Attempt to fill the form based on provided selectors and fuzzy matching."""
    # Try defined selectors first
    for field, selector in selectors.items():
        try:
            val = profile.get(field) or profile.get('address', {}).get(field)
            if val:
                await page.fill(selector, str(val), timeout=2000)
        except:
            pass
            
    # Fallback: Fuzzy matching for common fields if selectors failed or aren't defined
    common_fields = {
        'name': profile['business_name'],
        'phone': profile['phone'],
        'email': profile['email'],
        'website': profile['website'],
        'street': profile['address']['street'],
        'city': profile['address']['city'],
        'zip': profile['address']['zip']
    }
    
    for label, value in common_fields.items():
        try:
            # Look for inputs with matching id, name, or placeholder
            await page.locator(f"input[id*='{label}' i], input[name*='{label}' i], input[placeholder*='{label}' i]").first.fill(value, timeout=1000)
        except:
            continue

async def run_agent():
    # Load profile and sites
    with open('c:/Projects/fix/research_engine/business_profile.json', 'r') as f:
        profile = json.load(f)
    with open('c:/Projects/fix/research_engine/citation_sites.json', 'r') as f:
        sites = json.load(f)

    async with async_playwright() as p:
        # Use msedge channel as it's pre-installed on Windows
        try:
            browser = await p.chromium.launch(headless=False, channel="msedge")
        except Exception as e:
            print(f"Could not launch Edge: {e}")
            print("Trying default chromium...")
            browser = await p.chromium.launch(headless=False)
        
        context = await browser.new_context()
        page = await context.new_page()

        print("\n=== Citation Agent Started ===")
        print("I will open the sites one by one. You must solve CAPTCHAs and click Submit.")
        
        for site in sites:
            print(f"\nTarget: {site['name']}")
            print(f"URL: {site['url']}")
            
            try:
                await page.goto(site['url'])
                await page.wait_for_load_state("networkidle")
                
                # Auto-fill what we can
                await fill_form(page, profile, site.get('selectors', {}))
                
                input("\n>>> Form partially filled. Solve CAPTCHA, click Submit, then press Enter here for next site...")
                
            except Exception as e:
                print(f"Error on {site['name']}: {e}")
                input("Press Enter to skip and move to the next site...")

        await browser.close()
        print("\nDone! All sites processed.")

if __name__ == "__main__":
    asyncio.run(run_agent())
