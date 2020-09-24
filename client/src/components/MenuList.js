import React from "react";

const MenuList = (props) => {
  const styeldlistItems = props.listItems.map((listItem) => (
    <a className="no-underline silver" href={listItem.url}>
      <li className="grow ph3 pv2 bb b--light-silver">{listItem.title}</li>
    </a>
  ));
  return (
    <div className="menu absolute" style={{ zIndex: 1000 }}>
      <ul className="list pl0 ml0 mt0 mw5 bg-near-black silver br0 pa2 b--white">
        {styeldlistItems}
        {/* <a className="no-underline silver" href={props.lastItem.url}>
          <li className="grow ph3 pv2">{props.lastItem.title}</li>
        </a> */}
      </ul>
    </div>
  );
};

export default MenuList;
