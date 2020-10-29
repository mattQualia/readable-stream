var Stream = require('stream');
if (process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream.Readable;
  Object.assign(module.exports, Stream);
  module.exports.Stream = Stream;
} else {
  exports = module.exports = require('./build/_stream_readable.js');
  exports.Stream = Stream || exports;
  exports.Readable = exports;
  exports.Writable = require('./build/_stream_writable.js');
  exports.Duplex = require('./build/_stream_duplex.js');
  exports.Transform = require('./build/_stream_transform.js');
  exports.PassThrough = require('./build/_stream_passthrough.js');
  exports.finished = require('./build/internal/streams/end-of-stream.js');
  exports.pipeline = require('./build/internal/streams/pipeline.js');
}
