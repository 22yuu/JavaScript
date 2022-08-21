/**
 * Json
 * 
 */

 const obj = {x : 5, y: 6};

 const json = JSON.stringify(obj);
 const jsonParseObj = JSON.parse(json);

 console.log(typeof obj)
 console.log(json)
 console.log(typeof json)
 console.log(typeof jsonParseObj)

 /**
  * - JSON Parse (서버에서 데이터를 가져올 때)
  * ㄴJSON -> "JS Object" 
  * 
  * - JSON stringify (서버로 데이터를 보낼 떄)
  * JS Object => JSON
  * 
  * JavaScript (프론트엔드)
  *  |
  * JSON
  *  |
  * Java, Python, Ruby, Go (백엔드)
  */