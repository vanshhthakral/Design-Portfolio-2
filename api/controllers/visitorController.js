const Visitor = require('../models/Visitor');

exports.getVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      await visitor.save();
    }
    
    res.status(200).json({ success: true, count: visitor.count });
  } catch (error) {
    console.error('Visitor count error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
