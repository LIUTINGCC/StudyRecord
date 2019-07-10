import "hzero-ui/es/input/style";
import _Input from "hzero-ui/es/input";

import "hzero-ui/es/button/style";
import _Button from "hzero-ui/es/button";

import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

import "hzero-ui/es/icon/style";
import _Icon from "hzero-ui/es/icon";

import "hzero-ui/es/message/style";
import _message from "hzero-ui/es/message";

import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

import "hzero-ui/es/modal/style";
import _Modal from "hzero-ui/es/modal";

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/esm/applyDecoratedDescriptor";

import _isNil from "lodash/isNil";
import _omit from "lodash/omit";
import _isFunction from "lodash/isFunction";
import _isEmpty from "lodash/isEmpty";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _temp;

import React from 'react';
import { Bind, Throttle } from 'lodash-decorators';
import uuid from 'uuid/v4';
import intl from "../../utils/intl";
import LovModal from "./LovModal";
import { queryLov } from "../../services/api";
import "./index.less";
var defaultRowKey = 'key';
var Lov = 
(
    _dec = Bind(), 
    _dec2 = Bind(), 
    _dec3 = Bind(), 
    _dec4 = Bind(), 
    _dec5 = Bind(), 
    _dec6 = Bind(), 
    _dec7 = Bind(), 
    _dec8 = Bind(), 
    _dec9 = Throttle(500), 
    _dec10 = Bind(), 

    (
        _class = (_temp = _class2 =
        /*#__PURE__*/
        function (_React$Component) {//立即执行函数
        _inherits(Lov, _React$Component);
        // 选中记录
        function Lov(props) {
            var _this;
            //判断函数返回值是否能回调
            _classCallCheck(this, Lov);
            //返回构造器
            _this = _possibleConstructorReturn(this, _getPrototypeOf(Lov).call(this, props));
            //初始化选中值
            _this.record = void 0;
            //设置loading状态
            _this.loading = false;
            _this.state = {
            currentText: null,//
            text: props.isInput ? props.value : props.textValue,//判断对象是否Input
            textField: props.textField,
            lov: {},
            loading: false
            };
            _this.modalRef = React.createRef();//为组件创建引用
            return _this;
        } // eslint-disable-next-line

        //_createClass(Constructor, protoProps, staticProps)
        // _createClass(目标对象,[{key:"方法名",value:"方法"},{},{}],)
        //使用Object.defineProperty设置属性为(因为默认为false): 
        // 可枚举(enumerable), 可修改删除(configurable), 可用数据运算符赋值(writable)

        //为Lov定义新属性(各种方法): `UNSAFE_componentWillReceiveProps`, `onSelect`, `selectAndClose`, `getTextField`, 
        //`selectRecord`,`setExtMapToForm`, `onCancel`, `showLoading`, `hideLoading`, `modalWidth`, `onSearchBtnClick`, 
        //`searchButton`, `emitEmpty`, `parseField`, `setValue`, `setText`, `render` 
        _createClass(Lov, [
            {key: "UNSAFE_componentWillReceiveProps",value: function UNSAFE_componentWillReceiveProps(nextProps){}}, 
            {key: "onSelect",value: function onSelect(record) {}}, 
            {key: "selectAndClose",value: function selectAndClose() {}}, 
            {key: "getTextField",value: function getTextField() {}}, 
            {key: "selectRecord",value: function selectRecord() {}}, 
            {key: "setExtMapToForm",value: function setExtMapToForm(record, extSetMap, form) {}}, 
            {key: "onCancel",value: function onCancel() {}}, 
            {key: "showLoading",value: function showLoading() {}}, 
            {key: "hideLoading",value: function hideLoading() {}}, 
            {key: "modalWidth",value: function modalWidth(tableFields) {}}, 
            {key: "onSearchBtnClick",value: function onSearchBtnClick() {}}, 
            {key: "searchButton",value: function searchButton() {}}, 
            {key: "emitEmpty",value: function emitEmpty() {}}, 
            {key: "parseField",value: function parseField(obj, str) {}}, 
            {key: "setValue",value: function setValue(value) {}}, 
            {key: "setText",value: function setText(value) {}},
            {key: "render",value: function render() {}}
        ]);
        return Lov;
        }(React.Component), 

        _class2.displayName = 'Lov', _temp), 


        //_applyDecoratedDescriptor(target, property, decorators, descriptor, context)
        (
            _applyDecoratedDescriptor(_class.prototype, "onSelect", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "onSelect"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "selectAndClose", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "selectAndClose"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "onCancel", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "onCancel"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "modalWidth", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "modalWidth"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "onSearchBtnClick", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "onSearchBtnClick"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "emitEmpty", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "emitEmpty"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "parseField", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "parseField"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "setValue", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, "setValue"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "setText", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "setText"), _class.prototype)
        ), 
        _class
    )
    
);
export { Lov as default };


export default function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
  
    return obj;
  }
import defineProperty from "./defineProperty";
export default function _objectSpread(target) {
// 对每个参数, 获取属性名
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}








var Lov = ( 
    _dec = Bind(), 
    _dec2 = Bind(),
    (_class = (_temp = _class2 = function a(){}(), _class2.displayName = 'Lov', _temp ), test(), _class)
)
export { Lov as default };
