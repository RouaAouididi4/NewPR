const Property = require("../Models/PropertiesModel");
const catchAsync = require("../Utils/CatchAsync");

// Get all properties
exports.getAllProperties = catchAsync(async (req, res, next) => {
  const properties = await Property.find();
  res.status(200).json({ status: "success", data: properties });
});

// Get a property by ID
exports.searchProperties = async (req, res) => {
  try {
    const { address, type, minPrice, maxPrice, bedrooms, minSize, maxSize } =
      req.query;
    const query = {};

    if (address) query.address = { $regex: address, $options: "i" };
    if (type) query.type = type;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (bedrooms) query.bedrooms = Number(bedrooms);
    if (minSize || maxSize) {
      query.size = {};
      if (minSize) query.size.$gte = Number(minSize);
      if (maxSize) query.size.$lte = Number(maxSize);
    }

    const properties = await Property.find(query);
    res.status(200).json({
      status: "success",
      results: properties.length,
      properties,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Server error", error: error.message });
  }
};

// Create a new property
exports.createProperty = catchAsync(async (req, res, next) => {
  const { address, type, price, size, bedrooms, status, management } = req.body;

  // Create a new property with the status and management specified by the customer
  const newProperty = await Property.create({
    address,
    type,
    price,
    size,
    bedrooms,
    status: status || "pending", // 'online' or 'pending' or 'managing'
    management: management || "unmanaged", // 'managed' or 'unmanaged'
  });

  res.status(201).json({ status: "success", data: newProperty });
});

// Update a property
// Update a property
exports.updateProperty = catchAsync(async (req, res, next) => {
  const { status, management } = req.body;

  // Check if a status or management is provided
  const updatedProperty = await Property.findByIdAndUpdate(
    req.params.id,
    {
      status: status || undefined, // If status is provided, update it
      management: management || undefined, // If management is provided, update it
      // You can also add other fields if needed
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedProperty) {
    return res
      .status(404)
      .json({ status: "error", message: "Property not found" });
  }

  res.status(200).json({ status: "success", data: updatedProperty });
});
// Delete a property
exports.deleteProperty = catchAsync(async (req, res, next) => {
  await Property.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: "success", data: null });
});
exports.getPropertyById = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return res
      .status(404)
      .json({ status: "error", message: "Property not found" });
  }
  res.status(200).json({ status: "success", data: property });
});
