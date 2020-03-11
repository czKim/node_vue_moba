module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category");

  /**
   * 创建分类
   */
  router.post("/categories", async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
  });

  /**
   * 获取分页列表
   */
  router.get("/categories", async (req, res) => {
    const items = await Category.find().limit(10);
    res.send(items);
  });

  /**
   * 根据id获取分类详情
   */
  router.get("/categories/:id", async (req, res) => {
    const item = await Category.findById(req.params.id);
    res.send(item);
  });
  app.use("/admin/api", router);
};
