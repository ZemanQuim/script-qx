/*
 * @Descripttion: 香哈菜谱vip
 * @version: 0.0.2
 * @Author: Zeman
 * @Date: 2022-03-31 12:06:19
 * @LastEditors: Zeman
 * @LastEditTime: 2022-09-19 11:47:26
 */

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v4/User/getUserData';
const dish = '/v4/dish/info';
const sb = '/v4/User/getDeviceInfo';
const bd = '/v4/User/bindVipCus';

if (url.indexOf(vip) != -1) {
  obj['data']['data']['vip']['is_open_vip'] = '1';
  obj['data']['data']['vip']['is_vip'] = '2';
  body = JSON.stringify(obj);
}

if (url.indexOf(dish) != -1) {
  power = Object.keys(obj['data']['power']);
  if (power.length != 0) {
    obj['data']['power']['detail']['video']['common']['isShow'] = '0';
  }
  body = JSON.stringify(obj);
}

if (url.indexOf(sb) != -1) {
  obj['data']['is_vip'] = '2';
  body = JSON.stringify(obj);
}

if (url.indexOf(bd) != -1) {
  obj['data']['state'] = '2';
  body = JSON.stringify(obj);
}

$done({ body });
