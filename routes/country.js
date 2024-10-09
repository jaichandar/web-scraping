const express=  require('express')
const router = express.Router();

router.get("/contries", async(req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const pageUrl = 'https://www.scrapethissite.com/pages/simple/';

    await page.goto(pageUrl);

    const countries = await page.evaluate(() => {
        const countryList = document.querySelectorAll('.country');
        return Array.from(countryList).map((country) => {
            const countryName = country.querySelector('.country-name').textContent.split('\n').map(item => item.trim()).filter(item => item).join('');
            const capital = country.querySelector('.country-info .country-capital').textContent;
            const population = country.querySelector('.country-info .country-population').textContent;
            const area = country.querySelector('.country-info .country-area').textContent;
            return {
                countryName,
                capital,
                population,
                area,
            }
        })
    })
    res.status(200).json({
        success: true,
        data: countries
    })
})

module.exports = router;