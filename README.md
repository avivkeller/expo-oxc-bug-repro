# Expo Noxcturnal inline-requires repro

A blank Expo SDK 58 project. There are no added dependencies. Metro enables
`inlineRequires`; `fixture.js` references a require binding in another
declarator in the same `var` statement.

```sh
npm ci
EXPO_REPRO_NOXCTURNAL=1 npx expo export --platform android --clear
npx expo export --platform android --clear
```

The first export fails with `overlapping edits` in `fixture.js`. The second
exports successfully with Noxcturnal off. No Android device or emulator is needed.

Expo Doctor passes on the default configuration. With
`EXPO_REPRO_NOXCTURNAL=1`, Doctor flags the experimental config key itself;
the Expo CLI still reads the key and enables the worker.
