var ResponseError = function (obj) {
  this.msg = obj.msg;
  this.no = obj.no;
};
ResponseError.prototype = new Error();
ResponseError.prototype.constructor = ResponseError;

module.exports = function (req, res, next) {

  /**
   * 成功响应
   *
   * @param {object} data 返回的数据对象
   */
  res.success = function (data) {
    res.send({ status: 'OK', data: data });
  };

  /**
   * 失败响应
   *
   * @param {ResponseError} error 响应错误对象
   */
  res.failure = function (error) {
    if (! error || ! (error instanceof ResponseError)) {
      error = new ResponseError({ msg: 'ERROR', no: 1000 });
    }
    res.send({ status: 'ERROR', errmsg: error.msg, errno: error.no });
  };

  next();
};
