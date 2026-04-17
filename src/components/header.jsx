import { Col, Drawer, Flex, Input, Menu, Modal, Row } from "antd";
import { useState } from "react";
import Logo from "../assets/images/Logo.png";
import EnFlag from "../assets/icons/flags/en.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const navigate = useNavigate();

  const [openSearch, setOpenSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const onCancel = () => {
    setOpenSearch(false);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const onSearch = async (e) => {
    onCancel();
    navigate(`/search?query=${e}`);
  };

  return (
    <header className="header-wrapper">
      <Row className="header-main" align="middle">
        <Col xs={7} lg={0}>
          <div className="flex-col show-for-medium flex-left">
            <ul className="mobile-nav nav nav-left">
              <li
                className="nav-icon has-icon"
                onClick={() => setShowDrawer(true)}>
                <i className="fa-solid fa-bars fa-lg"></i>
              </li>
            </ul>
          </div>
        </Col>

        <Col xs={10} lg={5}>
          <div className="logo">
            <a
              href="/"
              title="An Phat Holdings"
              rel="home"
              style={{ width: "fit-content" }}>
              <img src={Logo} className="header-logo" alt="An Phat Holiding" />
            </a>
          </div>
        </Col>

        <Col xs={0} lg={12}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            onSelect={(e) => navigate(e.key ? e.key : e.keyPath[0])}
            className="header-nav">
            <Menu.Item
              key="/all-product"
              className="menu-item menu-item-design-default">
              <span className="nav-top-link">All Products</span>
            </Menu.Item>
            <Menu.Item
              key="/about-us"
              className="menu-item menu-item-design-default">
              <span className="nav-top-link">About us</span>
            </Menu.Item>
            <Menu.Item
              key="/contact-us"
              className="menu-item menu-item-design-default">
              <span className="nav-top-link">Contact us</span>
            </Menu.Item>
          </Menu>
        </Col>

        <Col span={7}>
          {/* <div className="flex-col show-for-medium flex-right">
            <ul className="mobile-nav nav nav-right header-nav-main">
              <li className="button-element">
                <a className="button button-gradient" href="/catalog">
                  <span className="uppercase">Download Catalog</span>
                </a>
              </li>
            </ul>
          </div> */}
          <div className="flex-col hide-for-medium flex-right">
            <ul className="header-nav nav-right">
              <li className="search-icon-item">
                <span
                  className="link_open_search"
                  onClick={() => setOpenSearch(true)}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    size="lg"
                  />
                </span>
              </li>
              <li className="html_topbar_right">
                <Flex
                  align="center"
                  gap={8}
                  className="select-language-container">
                  <img className="img-flag" src={EnFlag} />
                  <span>EN</span>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                </Flex>
              </li>

              <li className="button_right_header">
                <button className="button-gradient">
                  <span className="uppercase">Download Catalog</span>
                </button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Drawer
        title={
          <>
            <a href="/">
              <i className="fa-regular fa-house"></i>
            </a>
            <i className="fa-solid fa-xmark fa-xl" onClick={closeDrawer}></i>
          </>
        }
        placement="left"
        width="75%"
        closable={false}
        open={showDrawer}
        onClose={closeDrawer}
        className="custom-menu-mobile">
        <Menu
          selectedKeys={[location.pathname]}
          onSelect={(e) => navigate(e.key)}
          className="navbar-nav mr-auto"
          items={[
            {
              key: "/all-product",
              label: "All Products",
            },
            {
              key: "/about-us",
              label: "About us",
            },
            {
              key: "/contact-us",
              label: "Contact us",
            },
          ]}
        />
      </Drawer>
      <Modal
        open={openSearch}
        onCancel={onCancel}
        footer=""
        centered
        className="jquery-modal">
        <div className="modal-content header-search-form-wrapper">
          <Input.Search
            placeholder="Input search text"
            className="customize-search-header"
            addonBefore={
              <div className="flex-col icon-search-box">
                <span className="camera-icon"></span>
              </div>
            }
            enterButton="Search"
            onSearch={onSearch}
          />
        </div>
      </Modal>
    </header>
  );
}

export default Header;
