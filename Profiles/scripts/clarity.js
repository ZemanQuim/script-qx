/*
 * @Descripttion: 克拉壁纸vip
 * @version: 0.0.1
 * @Author: Zeman
 * @Date: 2022-08-03 09:54:55
 * @LastEditors: Zeman
 * @LastEditTime: 2022-08-03 10:07:16
 */
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = '/userInfo';
const setfree = '/special/queryByCatalogAll';
const setfree2 = '/catalog/listAll';
const setfree3 = '/avatar/search';

if (url.indexOf(setfree) != -1) {
  for (var i = 0; i < obj.data.length; i++) {
    obj.data[i].isFree = true;
    obj.data[i].random = 'Kqp5/Z35ga5WBeNcLue+dBwZW4ZWRoDFMAqqU48d06Y=';
  }
  body = JSON.stringify(obj);
}
if (url.indexOf(setfree2) != -1) {
  for (var i = 0; i < obj.data.length; i++) {
    obj.data[i].isFree = true;
    obj.data[i].random =
      'wjLjmdAKBoTDuB2nuyeOTZBO88mYauF59Q2NoQs7ENgEzRiZiQgWF8epm1xlWyYZ';
  }
  body = JSON.stringify(obj);
}
if (url.indexOf(setfree3) != -1) {
  for (var i = 0; i < obj.data.list.length; i++) {
    obj.data.list[i].isFree = true;
  }
  body = JSON.stringify(obj);
}
if (url.indexOf(userinfo) != -1) {
  obj.data.level = 5;
  obj.data.expireTime = 4070965662;
  body = JSON.stringify(obj);
}
$done({ body });
