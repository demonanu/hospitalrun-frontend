"use strict";
/* eslint-disable no-console */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var locales_1 = __importDefault(require("../../src/shared/locales"));
var error = chalk_1.default.bold.red;
var warning = chalk_1.default.keyword('orange');
var success = chalk_1.default.keyword('green');
var checkRecursiveTranslation = function (comparingLanguage, searchingPath, defaultLanguageObject, comparingLanguageObject) {
    if (typeof defaultLanguageObject === 'string' || typeof comparingLanguageObject === 'string') {
        if (typeof defaultLanguageObject === 'object') {
            console.log(warning("Found a string for path " + searchingPath.join('-->') + " and language " + comparingLanguage + " while is and object for the default language"));
        }
        return;
    }
    var defaultKeys = Object.keys(defaultLanguageObject);
    var translatedKeys = Object.keys(comparingLanguageObject);
    if (defaultKeys.length === 0 || translatedKeys.length === 0) {
        return;
    }
    defaultKeys.forEach(function (key) {
        if (!comparingLanguageObject[key]) {
            console.warn(warning("The key " + key + " is not present for path " + searchingPath.join('-->') + " and language " + comparingLanguage));
        }
        else {
            checkRecursiveTranslation(comparingLanguage, __spreadArrays(searchingPath, [key]), defaultLanguageObject[key], comparingLanguageObject[key]);
        }
    });
};
var run = function () {
    var languages = Object.keys(locales_1.default);
    var defaultLanguage = 'en';
    console.log(success('🏁 Start finding translation problem comparing all languages with the default one (English)'));
    console.log('');
    if (!locales_1.default[defaultLanguage]) {
        console.log(error('We have a big problem.... the english language is not found!'));
        process.exit(1);
    }
    languages.forEach(function (language) {
        if (language === defaultLanguage) {
            return;
        }
        console.log(success("Checking " + language));
        console.log('');
        checkRecursiveTranslation(language, [language], locales_1.default[defaultLanguage], locales_1.default[language]);
        console.log('');
    });
};
run();
