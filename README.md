
# react-native-pyy-rn-lib

## Getting started

`$ npm install react-native-pyy-rn-lib --save`

### Mostly automatic installation

`$ react-native link react-native-pyy-rn-lib`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-pyy-rn-lib` and add `RNPyyRnLib.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPyyRnLib.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.pyyrmlib.RNPyyRnLibPackage;` to the imports at the top of the file
  - Add `new RNPyyRnLibPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-pyy-rn-lib'
  	project(':react-native-pyy-rn-lib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-pyy-rn-lib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-pyy-rn-lib')
  	```


## Usage
```javascript
import RNPyyRnLib from 'react-native-pyy-rn-lib';

// TODO: What to do with the module?
RNPyyRnLib;
```
  
