# Titles
An example application to showcase 3 levels of testing in meteor

Credits to author http://www.meteortesting.com/ for teaching many useful techniques and ideas

## Installation

```
git clone https://github.com/geekyme/Titles.git
```

```
cd Titles && meteor 
```

## Problems with starting up?

If you get: 

```
=> Errors prevented startup:

   While building the application:
   error: Stylus compiler error: client/styles/main.styl:2:9
   1| // import the symlinked package files
   2| @import
   '../../.meteor/local/build/programs/web.browser/packages/innovae_bootstrap-stylus/bootstrap'
   --------------^
   3|
   4| body
   5|   font-family 'Helvetica', 'Helvetica Neue', 'Georgia', 'Arial',
   sans-serif

   failed to locate @import file
   ../../.meteor/local/build/programs/web.browser/packages/innovae_bootstrap-stylus/bootstrap.styl
```

Just restart your meteor process and it should work.