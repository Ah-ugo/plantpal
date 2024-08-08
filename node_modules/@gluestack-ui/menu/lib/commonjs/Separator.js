"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Separator = Separator;
function Separator(_props) {
  return null;
}
Separator.getCollectionNode = function* getCollectionNode(props, _context) {
  let rendered = props.children;
  yield {
    type: 'seperator',
    props: props,
    rendered
  };
};
Separator.displayName = 'Separator';
//# sourceMappingURL=Separator.js.map