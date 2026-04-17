import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  Pagination,
  Row,
  Slider,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function SearchScreen() {
  // Bỏ cmt nếu bạn sử dụng phần này
  // const { productCategory } = useSelector((state) => state.category);

  const query = new URLSearchParams(useLocation().search);
  const textSearch = query.get("query");

  const [form] = Form.useForm();
  const [filterData, setFilterData] = useState();
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    /* VIẾT CODE CỦA BẠN VÀO ĐÂY */
  }, []);

  const onValuesChange = (changedValues, allValues) => {
    const hasValue = Object.values(allValues).some((value) => value);
    setSubmitDisabled(!hasValue);
  };

  const onFilter = async (values) => {
    const hasValue = Object.values(values).some((value) => value);
    if (!hasValue) {
      return;
    }

    let filters;
    Object.keys(values).forEach((key) => {
      if (
        values[key] &&
        values[key].length > 0 &&
        key !== "categories" &&
        key !== "textSearch"
      ) {
        filters = { ...filters, [key]: values[key] };
      }
    });

    /* VIẾT CODE CỦA BẠN VÀO ĐÂY */
  };

  const clearFilters = () => {
    form.resetFields();
    setFilterData();
    setSubmitDisabled(true);
  };

  return (
    <div id="content" className="content-area">
      <section className="heath-lek section">
        <div className="section-bg fill">
          <div className="video-overlay no-click fill"></div>
          <video
            className="video-bg fill"
            preload="true"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="images/website/video_category_product.mp4"
              type="video/mp4"
            />
          </video>
          <div className="section-bg-overlay absolute fill"></div>
        </div>
        <div className="section-content relative">
          <div className="_4csl row">
            <div className="_9trw col large-6 medium-6 small-12 RemovePaddingBottom">
              <div className="col-inner">
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
                          <Link to="/all-product" className="item-bread">
                            All Products
                          </Link>
                        ),
                      },
                      {
                        title: <span className="active-bread">Search</span>,
                      },
                    ]}
                    id="breadcrumb"
                  />
                  <h2 className="_5xfq _1kly">Search</h2>
                  <p className="_7vyg">
                    Results you search with keywords: &quot;{textSearch}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="penury-gym section">
        <div className="section-content relative">
          <div className=" category-page-row">
            <Row gutter={30}>
              <Col span={6}>
                <div className="product_sidebar_cate">
                  <div className="show-for-small filter-icon">
                    <div className="group-filter">
                      <i className="fa-light fa-filter"></i>
                    </div>
                    <span className="label">Filter</span>
                  </div>
                  <div className="col-inner">
                    <Form
                      layout="vertical"
                      form={form}
                      onValuesChange={onValuesChange}
                      onFinish={onFilter}
                    >
                      <div className="_4get">
                        <div className="_4yee">
                          <div className="_5tyu">Filters</div>
                          <div className="_2wzq">
                            <Button
                              type="link"
                              size="small"
                              id="clear-filter"
                              onClick={clearFilters}
                              disabled={!filterData}
                            >
                              Clear Filters
                            </Button>
                          </div>
                        </div>
                        <Form.Item name="textSearch" className="_7pia">
                          <Input
                            placeholder="Search Products"
                            className="_8jji"
                            suffix={<SearchOutlined />}
                          />
                        </Form.Item>
                      </div>

                      <Form.Item
                        label="Categories"
                        name="categories"
                        className="widget_product_categories"
                      >
                        <Checkbox.Group className="form-group">
                          <Checkbox value={1}>Consumer Packaging</Checkbox>
                          <Checkbox value={2}>Industrial Packaging</Checkbox>
                        </Checkbox.Group>
                      </Form.Item>

                      <Form.Item
                        label="Type of"
                        className="widget_product_categories"
                      >
                        <Checkbox.Group className="form-group">
                          <Checkbox value={3}>Food Storage</Checkbox>
                          <Checkbox value={4}>Trash Bags</Checkbox>
                          <Checkbox value={5}>
                            Knife – Case – Storage Box
                          </Checkbox>
                          <Checkbox value={6}>Containers</Checkbox>
                          <Checkbox value={7}>Gloves</Checkbox>
                        </Checkbox.Group>
                      </Form.Item>

                      <Form.Item
                        label="Width (cm)"
                        className="widget_product_categories"
                      >
                        <Slider min={10} max={60} range />
                      </Form.Item>

                      <Form.Item
                        label="Length (cm)"
                        className="widget_product_categories"
                      >
                        <Slider min={20} max={120} range />
                      </Form.Item>

                      <Form.Item
                        label="Recycle"
                        className="widget_product_categories"
                      >
                        <Checkbox.Group className="form-group">
                          <Checkbox value="Yes">Yes</Checkbox>
                          <Checkbox value="No">No</Checkbox>
                        </Checkbox.Group>
                      </Form.Item>

                      {!isSubmitDisabled && (
                        <Button
                          type="link"
                          htmlType="submit"
                          className="filter"
                        >
                          Filter
                        </Button>
                      )}
                    </Form>
                  </div>
                </div>
              </Col>
              <Col span={18}>
                <div className="product_cate">
                  <div className="_7mkr">
                    <h2 className="_3rac">Keyword: &quot;{textSearch}&quot;</h2>
                  </div>
                  <div className="products">
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_1.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Food Wrap
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_2.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Overlock Jumbo bag
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_1.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Food Wrap
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_2.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Overlock Jumbo bag
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_2.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Overlock Jumbo bag
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_1.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Food Wrap
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_2.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Overlock Jumbo bag
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_1.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Food Wrap
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col has-hover product">
                      <div className="col-inner">
                        <div className="box-product has-hover">
                          <div className="box-image customer-box-image-product">
                            <a href="#" className="_1gqs block image-zoom">
                              <img
                                src="/images/website/product-list_2.png"
                                className="_8wjh"
                              />
                            </a>
                          </div>
                          <div className="box-text box-text-products text-left">
                            <div className="title-wrapper">
                              <h4 className="product-title">
                                <a href="#" className="product_link">
                                  Overlock Jumbo bag
                                </a>
                              </h4>
                              <p className="sku">
                                SKU: <span>036897488221-2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Pagination
                    defaultCurrent={1}
                    total={27}
                    defaultPageSize={9}
                    className="pagination-cntt"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="lichen-gel section">
        <div className="section-content relative">
          <div className="_2gia">
            <Row gutter={60}>
              <Col span={12}>
                <div className="text-box_image">
                  <p className="_0kce uppercase">Our catalog</p>
                  <h3 className="_8mak">Explore Our Catalogs</h3>
                  <p className="_8fet">
                    An Phat Holdings produces compostable bags and products like
                    knives, spoons, and straws from AnBio materials, decomposing
                    into water, CO₂, and humus in 6-12 months. Their compostable
                    packaging is the first in Vietnam certified with the OK
                    compost HOME by TUV Austria, ensuring biodegradability in
                    natural conditions within a year.
                  </p>
                  <div className="_3qdw">
                    <a href="#" className="button button-outline-green">
                      <span>Our Catalogs</span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="_1mtz">
                  <div className="image-box_image">
                    <img src="/images/website/explore.png" className="_6ikc" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchScreen;
