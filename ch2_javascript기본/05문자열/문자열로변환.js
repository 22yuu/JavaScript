/**
 * 자바스크립트에서 문자열은 immutable 불변한 성질!
 */

String(123); // '123'
String(undefined); // 'undefined'
String(null); // 'null'
String({}); // '[object Object]'
String({name:'jang'}); // '[object Object]'
String([1,2,3]); // '1,2,3'
JSON.stringify({name:'jang'}) // '{'name':'jang'}'
