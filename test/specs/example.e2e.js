const KhanAcademyTest = require("../pageobjects/tests");
describe('This for Khan Academy', () => {
    
   it("Explore_Bookmarks", async () => {
      await KhanAcademyTest.Explore_Bookmarks();
    });
    it("Verifying_Deleting_Bookmarks", async () => {
      await KhanAcademyTest.Verifying_Deleting_Bookmarks();
    });
    it("Video_recentLesson", async () => {
      await KhanAcademyTest.Video_recentLesson();
    });
    it('Setting', async() => {
      await KhanAcademyTest.Setings();
    });
    it('Arts Humanities', async() => {
      await KhanAcademyTest.Arts_humanities();
    });
    it("App switch", async () => {
      await KhanAcademyTest.AppSwith();
    });
    it("Closing", async () => {
      await KhanAcademyTest.Closing();
    });
});