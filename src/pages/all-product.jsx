import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Col, Flex, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";

function AllProduct() {
  const navigate = useNavigate();

  const onSearch = async (e) => {
    if (e) {
      navigate(`/search?query=${e}`);
    }
  };

  return (
    <div id="content" className="content-area">
      <section className="heath-lek section">
        <div className="section-bg fill">
          <video
            className="video-bg fill"
            preload="true"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="images/website/video_all_product.mp4"
              type="video/mp4"
            />
          </video>
          <div className="section-bg-overlay absolute fill"></div>
        </div>
        <div className="section-content relative">
          <div className="_4csl">
            <Row gutter={30}>
              <Col span={12} className="_9trw RemovePaddingBottom">
                <div className="_4yvp">
                  <Breadcrumb
                    items={[
                      {
                        title: (
                          <a href="/" className="item-bread">
                            Home
                          </a>
                        ),
                      },
                      {
                        title: (
                          <span className="active-bread">All Products</span>
                        ),
                      },
                    ]}
                    id="breadcrumb"
                  />
                  <h2 className="_5xfq _1kly">All Products</h2>
                  <p className="_7vyg">
                    Discover our full range of eco-friendly and high-tech
                    plastic products designed for diverse industries. Engineered
                    with precision, tailored for your needs, and committed to a
                    greener future.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="seamy-sod section">
        <div className="section-content relative">
          <div className="_4zut">
            <Row gutter={30}>
              <Col span={24} className="_9msw">
                <h2 className="title-home">Find What You’re Looking For</h2>
              </Col>
            </Row>
          </div>
          <div className="_9jvd">
            <Row gutter={30}>
              <Col span={24} className="_5czu RemovePaddingBottom">
                <Input.Search
                  placeholder="Input search text"
                  className="_8wts"
                  enterButton={
                    <div className="button-gradient">
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                      <span className="uppercase">Search</span>
                    </div>
                  }
                  onSearch={onSearch}
                />
              </Col>
            </Row>
          </div>
          <div className="_5kgp">
            <Row gutter={30}>
              <Col span={24} className="_5pqy RemovePaddingBottom">
                <Flex vertical gap={14}>
                  <div className="_4tma">KEYWORD SUGGESTION</div>
                  <Flex align="center" justify="center" gap={12} wrap="wrap">
                    <div className="_1hmm">
                      <Link to="/search?query=Food Packaging" className="_6dut">
                        Food Packaging
                      </Link>
                    </div>
                    <div className="_1hmm">
                      <Link to="#" className="_6dut">
                        Consumer Packaging
                      </Link>
                    </div>
                    <div className="_1hmm">
                      <Link to="#" className="_6dut">
                        Eco-Friendly Bags
                      </Link>
                    </div>
                    <div className="_1hmm">
                      <Link to="#" className="_6dut">
                        Masterbatch Compounds
                      </Link>
                    </div>
                    <div className="_1hmm">
                      <Link to="#" className="_6dut">
                        Plastic Resins
                      </Link>
                    </div>
                    <div className="_1hmm">
                      <Link to="#" className="_6dut">
                        Cutlery
                      </Link>
                    </div>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="dynamism-nib section">
        <div className="section-content relative">
          <div className="_4zut">
            <Row gutter={30}>
              <Col span={24} className="_9msw">
                <h2 className="title-home">Choose a Market</h2>
              </Col>
            </Row>
          </div>
          <div className="_0odn">
            <div className="_3iwp">
              <a href="#" className="_8ahh block has-hover">
                <div className="_4rfh image-zoom">
                  <img src="/images/website/market_1.png" className="_5mgw" />
                </div>
                <div className="_1blc">
                  <div className="_9wvo">Consumer Goods</div>
                  <div className="_4jqn">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            </div>
            <div className="_3iwp">
              <a href="#" className="_8ahh block has-hover">
                <div className="_4rfh image-zoom">
                  <img src="/images/website/market_2.png" className="_5mgw" />
                </div>
                <div className="_1blc">
                  <div className="_9wvo">Consumer Goods</div>
                  <div className="_4jqn">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            </div>
            <div className="_3iwp">
              <a href="#" className="_8ahh block has-hover">
                <div className="_4rfh image-zoom">
                  <img src="/images/website/market_3.png" className="_5mgw" />
                </div>
                <div className="_1blc">
                  <div className="_9wvo">Packaging</div>
                  <div className="_4jqn">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            </div>
            <div className="_3iwp">
              <a href="#" className="_8ahh block has-hover">
                <div className="_4rfh image-zoom">
                  <img src="/images/website/market_4.png" className="_5mgw" />
                </div>
                <div className="_1blc">
                  <div className="_9wvo">Engineering Plastics</div>
                  <div className="_4jqn">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            </div>
            <div className="_3iwp">
              <a href="#" className="_8ahh block has-hover">
                <div className="_4rfh image-zoom">
                  <img src="/images/website/market_5.png" className="_5mgw" />
                </div>
                <div className="_1blc">
                  <div className="_9wvo">Building Materials</div>
                  <div className="_4jqn">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            </div>
            <div className="_3iwp">
              <a href="#" className="_8ahh block has-hover">
                <div className="_4rfh image-zoom">
                  <img src="/images/website/market_6.png" className="_5mgw" />
                </div>
                <div className="_1blc">
                  <div className="_9wvo">Raw Materials</div>
                  <div className="_4jqn">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fumed-ref section">
        <div className="section-content relative">
          <div className="_1nvi">
            <Row gutter={30}>
              <Col span={24} className="_5xem">
                <p className="_5bmu">Our products</p>
                <h3 className="_7kra">Sustainable Products</h3>
              </Col>
            </Row>
          </div>
          <div className="_5tcj">
            <div className="_6npx">
              <div className="_2jjl">
                <div className="_8ghs">
                  <a href="#" className="block">
                    <img
                      src="/images/website/vertical_1.png"
                      className="_9rtu"
                    />
                  </a>
                </div>
                <div className="_0cac">
                  <div className="_9not">
                    <div className="_2pzh">
                      <a href="#">Compostable Products</a>
                    </div>
                    <div className="_8ynm textLine-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>View products</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="_6npx">
              <div className="_2jjl">
                <div className="_8ghs">
                  <a href="#" className="block">
                    <img
                      src="/images/website/vertical_2.png"
                      className="_9rtu"
                    />
                  </a>
                </div>
                <div className="_0cac">
                  <div className="_9not">
                    <div className="_2pzh">
                      <a href="#">Compostable Materials</a>
                    </div>
                    <div className="_8ynm textLine-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>View products</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zeros-vug section">
        <div className="section-content relative">
          <div className="_1nvi">
            <Row gutter={30}>
              <Col span={24} className="_5xem">
                <p className="_5bmu">Our products</p>
                <h3 className="_7kra">Consumer Goods</h3>
              </Col>
            </Row>
          </div>
          <div className="_5msj">
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/consummer_1.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-1">
                    Cutlery/Straws
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/consummer_2.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-1">
                    Cups/Lids
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/consummer_3.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-1">
                    Food Containers
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/consummer_4.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-1">
                    Glovess
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fumed-ref section">
        <div className="section-content relative">
          <div className="_1nvi">
            <Row gutter={30}>
              <Col span={24} className="_5xem">
                <p className="_5bmu">Our products</p>
                <h3 className="_7kra">Packaging</h3>
              </Col>
            </Row>
          </div>

          <div className="_5tcj">
            <div className="_6npx">
              <div className="_2jjl">
                <div className="_8ghs">
                  <a href="#" className="block">
                    <img
                      src="/images/website/Packaging_1.png"
                      className="_9rtu"
                    />
                  </a>
                </div>
                <div className="_0cac">
                  <div className="_9not">
                    <div className="_2pzh">
                      <a href="#">Consumer Packaging</a>
                    </div>
                    <div className="_8ynm textLine-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>View products</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="_6npx">
              <div className="_2jjl">
                <div className="_8ghs">
                  <a href="#" className="block">
                    <img
                      src="/images/website/Packaging_2.png"
                      className="_9rtu"
                    />
                  </a>
                </div>
                <div className="_0cac">
                  <div className="_9not">
                    <div className="_2pzh">
                      <a href="#">Industrial Packaging</a>
                    </div>
                    <div className="_8ynm textLine-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>View products</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zeros-vug section">
        <div className="section-content relative">
          <div className="_1nvi">
            <Row gutter={30}>
              <Col span={24} className="_5xem">
                <p className="_5bmu">Our products</p>
                <h3 className="_7kra">Engineering Plastics</h3>
              </Col>
            </Row>
          </div>
          <div className="_5msj">
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/Engineering_1.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Automotive/Motorbike Parts
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/Engineering_2.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Molds
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/Engineering_3.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Household Appliances Parts
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/Engineering_4.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Electronics Parts
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img
                    src="/images/website/Engineering_5.png"
                    className="_1qlp"
                  />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Pallets/Cargo Containers
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fumed-ref section">
        <div className="section-content relative">
          <div className="_1nvi">
            <Row gutter={30}>
              <Col span={24} className="_5xem">
                <p className="_5bmu">Our products</p>
                <h3 className="_7kra">Building Materials</h3>
              </Col>
            </Row>
          </div>
          <div className="_5tcj">
            <div className="_6npx">
              <div className="_2jjl">
                <div className="_8ghs">
                  <a href="#" className="block">
                    <img
                      src="/images/website/Building_1.png"
                      className="_9rtu"
                    />
                  </a>
                </div>
                <div className="_0cac">
                  <div className="_9not">
                    <div className="_2pzh">
                      <a href="#">Interior</a>
                    </div>
                    <div className="_8ynm textLine-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>View products</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="_6npx">
              <div className="_2jjl">
                <div className="_8ghs">
                  <a href="#" className="block">
                    <img
                      src="/images/website/Building_2.png"
                      className="_9rtu"
                    />
                  </a>
                </div>
                <div className="_0cac">
                  <div className="_9not">
                    <div className="_2pzh">
                      <a href="#">Exterior</a>
                    </div>
                    <div className="_8ynm textLine-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>View products</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zeros-vug section">
        <div className="section-content relative">
          <div className="_1nvi">
            <Row gutter={30}>
              <Col span={24} className="_5xem">
                <p className="_5bmu uppercase">Our products</p>
                <h3 className="_7kra">Engineering Plastics</h3>
              </Col>
            </Row>
          </div>
          <div className="_5msj">
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img src="/images/website/Raw_1.png" className="_1qlp" />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Plastic Resins
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img src="/images/website/Raw_2.png" className="_1qlp" />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    Masterbatch/Compound
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="_4euo">
              <div className="_8aey">
                <a href="#" className="block">
                  <img src="/images/website/Raw_3.png" className="_1qlp" />
                </a>
              </div>
              <div className="_3pxh">
                <div className="_0cvj">
                  <a href="#" className="textLine-2">
                    CaCO3 Powder
                  </a>
                </div>
                <div className="_8gbl textLine-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  odit, cumque fuga labore corrupti dolor, non provident nobis
                  eius facere voluptas quam aliquam at quos, officiis eveniet
                  vero porro sequi!
                </div>
                <div className="_4jqn">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pitched-nap section">
        <div className="section-content relative">
          <div className="_4zut">
            <Row gutter={30}>
              <Col span={24} className="_9msw">
                <h2 className="title-home">
                  Explore Our Comprehensive Catalogs
                </h2>
              </Col>
            </Row>
          </div>
          <div className="_7tfg">
            <Row gutter={30}>
              <Col span={4} className="_5zla">
                <a className="_2rff block" href="#">
                  <div className="_4jot">
                    <img src="/images/website/pdf_1.png" className="_8opl" />
                  </div>
                  <div className="_9xqi">
                    <div className="_5vsn">
                      <div className="_5mdp textLine-1">Catalog name 01</div>
                      <div className="_2mjl textLine-1">
                        Item no: 0142711100
                      </div>
                    </div>
                    <div className="_3hml">
                      <img src="/images/icon_pdf.png" className="_4vua" />
                    </div>
                  </div>
                </a>
              </Col>
              <Col span={4} className="_5zla">
                <a className="_2rff block" href="#">
                  <div className="_4jot">
                    <img src="/images/website/pdf_2.png" className="_8opl" />
                  </div>
                  <div className="_9xqi">
                    <div className="_5vsn">
                      <div className="_5mdp textLine-1">Catalog name 02</div>
                      <div className="_2mjl textLine-1">
                        Item no: 0142711100
                      </div>
                    </div>
                    <div className="_3hml">
                      <img src="/images/icon_pdf.png" className="_4vua" />
                    </div>
                  </div>
                </a>
              </Col>
              <Col span={4} className="_5zla">
                <a className="_2rff block" href="#">
                  <div className="_4jot">
                    <img src="/images/website/pdf_3.png" className="_8opl" />
                  </div>
                  <div className="_9xqi">
                    <div className="_5vsn">
                      <div className="_5mdp textLine-1">Catalog name 03</div>
                      <div className="_2mjl textLine-1">
                        Item no: 0142711100
                      </div>
                    </div>
                    <div className="_3hml">
                      <img src="/images/icon_pdf.png" className="_4vua" />
                    </div>
                  </div>
                </a>
              </Col>
              <Col span={4} className="_5zla">
                <a className="_2rff block" href="#">
                  <div className="_4jot">
                    <img src="/images/website/pdf_4.png" className="_8opl" />
                  </div>
                  <div className="_9xqi">
                    <div className="_5vsn">
                      <div className="_5mdp textLine-1">Catalog name 04</div>
                      <div className="_2mjl textLine-1">
                        Item no: 0142711100
                      </div>
                    </div>
                    <div className="_3hml">
                      <img src="/images/icon_pdf.png" className="_4vua" />
                    </div>
                  </div>
                </a>
              </Col>
              <Col span={4} className="_5zla">
                <a className="_2rff block" href="#">
                  <div className="_4jot">
                    <img src="/images/website/pdf_5.png" className="_8opl" />
                  </div>
                  <div className="_9xqi">
                    <div className="_5vsn">
                      <div className="_5mdp textLine-1">Catalog name 05</div>
                      <div className="_2mjl textLine-1">
                        Item no: 0142711100
                      </div>
                    </div>
                    <div className="_3hml">
                      <img src="/images/icon_pdf.png" className="_4vua" />
                    </div>
                  </div>
                </a>
              </Col>
              <Col span={4} className="_5zla">
                <a className="_2rff block" href="#">
                  <div className="_4jot">
                    <img src="/images/website/pdf_6.png" className="_8opl" />
                  </div>
                  <div className="_9xqi">
                    <div className="_5vsn">
                      <div className="_5mdp textLine-1">Catalog name 06</div>
                      <div className="_2mjl textLine-1">
                        Item no: 0142711100
                      </div>
                    </div>
                    <div className="_3hml">
                      <img src="/images/icon_pdf.png" className="_4vua" />
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllProduct;
