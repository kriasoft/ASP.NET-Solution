## ASP.NET Solution Template

A solution template for a typical ASP.NET web application, pre-configured with [Git](http://git-scm.com/),
[Gulp.js](http://gulpjs.com/) (or Grunt), [NuGet](http://www.nuget.org/) and [StyleCope](http://stylecop.codeplex.com/)
development tools. It is well suited for building a single-page web application (SPA).

[![ASP.NET Solution Template](http://i.imgur.com/OEENneg.png)](http://visualstudiogallery.msdn.microsoft.com/359f4304-57d7-4178-9cab-165e2090dce2)

### Download

http://visualstudiogallery.msdn.microsoft.com/359f4304-57d7-4178-9cab-165e2090dce2

### Getting Started

After you create a new project, open Node.js Command Window, navigate to your project's folder, and run:

```bash
node install -g gulp    # Install Gulp.js globally, if you don't have it installed already
node install            # Install Node.js dev tools listed in the package.json file
```

`gulpfile.js` contains default settings for LESS and JavaScript build automation, in order to start a new build
and watch for modifications in *.js and *.less files, run:

```bash
gulp                    # Fires up Gulp.js task runner with default settings
```

For more information, please visit: https://github.com/KriaSoft/ASP.NET-Solution/wiki

### Directory Layout

![ASP.NET Solution Directory Layout](http://i.imgur.com/c8H18GL.png)

### Source Code

https://github.com/KriaSoft/ASP.NET-Solution

### Related Articles

* [Grunt your ASP.NET builds](http://blog.simontimms.com/2013/12/30/grunt-your-asp-net-builds/) by Simon Timms
* [Can I benefit from Grunt for my Visual Studio based development](http://joeriks.com/2013/08/06/can-i-benefit-from-grunt-for-my-visual-studio-based-web-development/) by Jonas Eriksson
* [How to setup NuGet package restore on a build server](http://docs.nuget.org/docs/reference/package-restore-with-team-build) NuGet Docs

### Credits

Brought to you by [Konstantin Tarkus](http://tarkus.me) ([@koistya](https://angel.co/koistya)),
[KriaSoft](http://www.kriasoft.com), [HTML5 Boilerplate](http://html5boilerplate.com/).

### License

This project is licensed under the **MIT License**. Refer to
[LICENSE.txt](https://github.com/KriaSoft/ASP.NET-Solution/blob/master/LICENSE.txt) for more information.

### Feedback

Have questions or need help? Email me at [hello@tarkus.me](mailto:hello@tarkus.me) or send a message on Skype: koistya.