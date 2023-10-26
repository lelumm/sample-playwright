import { expect, type Locator, type Page } from '@playwright/test';

export class TVNZplusPage {
  readonly page: Page;
  readonly login: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly linkProfile: Locator;
  readonly linkSport: Locator;
  readonly buttonLogin: Locator;
  readonly menuProfile: Locator;
  readonly closeVideo: Locator;
  readonly currebtTimeVideo: Locator;


  constructor(page: Page) {
    this.page = page;
    this.login = page.getByRole('link', { name: 'Login' });
    this.email = page.getByLabel('Email address');
    this.password =  page.getByLabel('PasswordShow Password');
    this.buttonLogin = page.getByRole('button', { name: 'Login' });
    this.linkProfile =  page.getByRole('link', { name: 'Eric Eric' });
    this.menuProfile = page.locator('#User-dropdown').getByText('Eric')
    this.linkSport = page.locator('#Sport > div.SiteNav-item--title > a')
    
    this.currebtTimeVideo = page.locator(':nth-match(span.vjs-current-time-display,2)')
    this.closeVideo = page.locator('a').filter({ hasText: 'Close Video' })

  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async loginTVNZ(testInfo) {
    await expect(this.login).toBeVisible();
    await this.login.first().click();
    await expect(this.email).toBeVisible();
    await this.email.first().fill(`${process.env.USER_NAME}`);
    await this.password.first().fill(`${process.env.USER_PASS}`);
    await this.buttonLogin.first().click();
    await expect(this.linkProfile).toBeVisible({timeout: 30000 });
    await this.linkProfile.first().click();
    await expect(this.menuProfile).toBeVisible();

    await testInfo.attach("profile",{
        body: await this.page.screenshot(),
        contentType: "image/png",
      })
  }

  async browseSportsTvShow(TvShow, testInfo) {
    await expect(this.linkSport).toBeVisible();
    await this.linkSport.first().click();
    await this.page.locator('span').getByText(TvShow).first().click();
    await this.page.getByRole('button', { name: 'Play' }).click()
    await expect(this.page.getByText('Advertisement 1 of 1')).toBeVisible({timeout: 30000 });
   
    await testInfo.attach("Advertisement 1 of 1",{
        body: await this.page.screenshot(),
        contentType: "image/png",
      })
    
    await expect.poll(async () => {
        await this.currebtTimeVideo.first().click();
        const response = await this.currebtTimeVideo.innerText();
        // console.log(response);
        return response;
      }, {
        // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe
        // ... Defaults to [100, 250, 500, 1000].
        // intervals: [1_000, 2_000, 10_000],
        timeout: 30_000
      }).toContain('0:1');

  }
}
