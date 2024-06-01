

import WebsitesModel from "../../../../DB/model/Websites.model.js";

export const GetAllURLS = async (req, res, next) => {
  const Websites = await WebsitesModel.find()

  return res
    .status(200)
    .json({ Status: true, cause: 200, message: "Success", data: Websites });
};


export const addURL = async (req, res, next) => {
  const { WebsiteName ,  WebsiteURL } = req.body;
  const isNameExist = await WebsitesModel.findOne({ WebsiteName });
  if (isNameExist) {
    return next(new Error("WebsiteName is already Exsits", { cause: 409 }));
  }
  const isURLExist = await WebsitesModel.findOne({ WebsiteURL });
  if (isURLExist) {
    return next(new Error("WebsiteURL is already Exsits", { cause: 409 }));
  }

  const Website = await WebsitesModel.create(req.body);

  return res
    .status(201)
    .json({ Status: true, cause: 201, message: "Success", data: Website });
};


export const deleteURL = async (req, res, next) => {
  const { URlId } = req.params;
  const Website = await WebsitesModel.findById(URlId);


  if (!Website) {
    return next(new Error("Websites Not Found",{ cause: 404 }));
  }
    
  const dele=await WebsitesModel.findByIdAndDelete(URlId)
    
  res.status(201).json({ message: "Success"});
};
