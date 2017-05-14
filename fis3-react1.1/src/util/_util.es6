/**
 * @module _util
 * @author 小虎牙
 */
import moment from 'moment';
export default {
    /**
     * @method moment, API见 node_modules/moment/README.md
     */
    moment,


    /**
     * @method 请求接口路径添加时间戳
     * @param  String: url
     * @param  String: param
     * @return string
     */
    addTimeStamp(url, param) {
        return (url + '?' + param + '&t=' + Date.now()).replace(/(\?{1,}\&)|(\?{2,})/, '?');
    }
};