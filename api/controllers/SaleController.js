/**
 * SaleController
 *
 * @description :: Server-side logic for managing sales
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `SaleController.index()`
   */
  index: function (req, res) {

    Sale.find(function(err,indexuser){
      if (err) {
        console.log("err");
        return res.send(err,500);
      }
      console.log("index");
    res.view({model:indexuser});
  });
  },


  /**
   * `SaleController.show()`
   */
  show: function (req, res) {
   var id = req.param('id');
   Sale.findOne(id,function(err,showuser){
    if (err) {
      return res.send(err,500);
    }
    res.view({model: showuser});
   });
  },


  /**
   * `SaleController.new()`
   */
  new: function (req, res) {
   res.view();
  },


  /**
   * `SaleController.create()`
   */
  create: function (req, res) {
    var param = _.extend(req.query || {},req.params || {},req.body || {});
    Sale.create(param,function(err,createuser){
    if (err) {
      return res.send(err,500);
    }
    res.redirect('/sales');
    });
  },


  /**
   * `SaleController.edit()`
   */
  edit: function (req, res) {
    var param = _.extend(req.query || {},req.params || {},req.body || {});
    var id = req.param('id');
    Sale.findOne(id,function(err,edituser){
    if (err) {
      return res.send(err,500);
    }
    console.log(edituser);
    res.view({model: edituser});
    });
    
  },


  /**
   * `SaleController.update()`
   */
  update: function (req, res) {
     var id = req.param('id');
    console.log("userupdate");
    var param = _.extend(req.query || {}, req.param || {}, req.body ||{});
    Sale.update(id,param,function(err,userupdate){
      if(err){
        return res.send(err,500);
      }
      res.redirect('/sales');
    });
  },


  /**
   * `SaleController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Sale.findOne(id,function(err,destroyuser){
    if (err) {
      return res.send(err,500);
    }
    Sale.destroy(id,function(err,destroyuser){
      if (err) {
        return res.send(err,500);
      }
    });
    res.redirect('/sales');
   });
  }
};

