import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Pagination,
  Row,
  Slider,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../services/interceptor";

function Category() {
  // Bỏ cmt nếu bạn sử dụng phần này
  // const { productCategory } = useSelector((state) => state.category);

  const { url } = useParams();
  const [form] = Form.useForm();

  const [categoryItem, setCategoryItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (url) {
      fetchCategoryDetail(url);
    }
  }, [url]);

  const fetchCategoryDetail = async (categoryUrl) => {
    try {
      const res = await axiosClient.get("/Category/GetCategoryByUrl", {
        params: { lang: "en", url: categoryUrl },
      });
      if (res) {
        setCategoryItem(res);
        const ids = [res.id];
        if (res.children && res.children.length > 0) {
          res.children.forEach(child => ids.push(child.id));
        }
        fetchProducts(ids, 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async (ids, page) => {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("lang", "en");
      queryParams.append("page", page);
      ids.forEach(id => queryParams.append("ids", id));
      
      const res = await axiosClient.get(`/Product/GetProductByCategory?${queryParams.toString()}`);
      if (res) {
        setProducts(res.items || []);
        setTotalCount(res.totalCount || 0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [filterData, setFilterData] = useState();
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [isFilterMode, setIsFilterMode] = useState(false);

  const submitFilter = async (values, page = 1) => {
    try {
      let filterCats = values.categories || [];
      if (filterCats.length === 0 && categoryItem) {
        const ids = [categoryItem.id];
        if (categoryItem.children && categoryItem.children.length > 0) {
           categoryItem.children.forEach(child => ids.push(child.id));
        }
        filterCats = ids;
      }
      
      const payload = {
        lang: "en",
        textSearch: values.textSearch || "",
        categories: filterCats,
        page: page
      };
      const res = await axiosClient.post("/Product/FilterSearchProduct", payload);
      if (res) {
         setProducts(res.products || res.items || res || []);
         setTotalCount(res.totalCount || res.length || 0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setPageNum(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isFilterMode && filterData) {
      submitFilter(filterData, page);
    } else if (categoryItem) {
      const ids = [categoryItem.id];
      if (categoryItem.children && categoryItem.children.length > 0) {
        categoryItem.children.forEach(child => ids.push(child.id));
      }
      fetchProducts(ids, page);
    }
  };

  const onValuesChange = (changedValues, allValues) => {
    const hasValue = Object.values(allValues).some((value) => value);
    setSubmitDisabled(!hasValue);
  };

  /*  Hàm nối children và filterList được trả về từ API GetCategoryByUrl phục vụ cho chức năng lọc.
      Hãy bỏ comment nếu bạn sử dụng.
  */
  // const mergeFilterLists = (tree) => {
  //   // Lấy FilterList của node hiện tại
  //   let mergedList = [...(tree.filterList || [])];

  //   // Duyệt qua từng Children và hợp nhất FilterList
  //   if (tree.children && tree.children.length > 0) {
  //     tree.children.forEach((child) => {
  //       mergedList = mergedList.concat(mergeFilterLists(child));
  //     });
  //   }

  //   return mergedList;
  // };

  const onFilter = async (values) => {
    const hasValue = Object.values(values).some((value) => value);
    if (!hasValue) {
      return;
    }
    
    // Save to states
    setFilterData(values);
    setIsFilterMode(true);
    setPageNum(1);
    
    // Call API
    submitFilter(values, 1);
  };

  const clearFilters = () => {
    form.resetFields();
    setFilterData(null);
    setIsFilterMode(false);
    setSubmitDisabled(true);
    setPageNum(1);
    
    if (categoryItem) {
      const ids = [categoryItem.id];
      if (categoryItem.children && categoryItem.children.length > 0) {
        categoryItem.children.forEach(child => ids.push(child.id));
      }
      fetchProducts(ids, 1);
    }
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
                          <Link to="/all-product" className="item-bread">
                            All Products
                          </Link>
                        ),
                      },
                      {
                        title: <span className="active-bread">{categoryItem ? categoryItem.categoryName : "Packaging"}</span>,
                      },
                    ]}
                    id="breadcrumb"
                  />

                  <h2 className="_5xfq _1kly">{categoryItem ? categoryItem.categoryName : "Packaging"}</h2>
                  {categoryItem ? (
                    <div className="_7vyg" dangerouslySetInnerHTML={{ __html: categoryItem.description }}></div>
                  ) : (
                    <div className="_7vyg">
                      <p>
                        All our products are under absolute supervision, from raw
                        materials to finished products.
                      </p>
                      <p>
                        We apply an international quality management system to all
                        of our products.
                      </p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="penury-gym section">
        <div className="section-content relative">
          <div className="category-page-row">
            <Row gutter={30}>
              <Col span={6}>
                <div className="product_sidebar_cate">
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
                      {categoryItem && categoryItem.children && categoryItem.children.length > 0 ? (
                        <Checkbox.Group className="form-group">
                          {categoryItem.children.map(child => <Checkbox value={child.id} key={child.id} style={{display: 'block', margin: '4px 0'}}>{child.categoryName}</Checkbox>)}
                        </Checkbox.Group>
                      ) : (
                        <Checkbox.Group className="form-group">
                          <Checkbox value={1}>Consumer Packaging</Checkbox>
                          <Checkbox value={2}>Industrial Packaging</Checkbox>
                        </Checkbox.Group>
                      )}
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
                      <Button type="link" htmlType="submit" className="filter">
                        Filter
                      </Button>
                    )}
                  </Form>
                </div>
              </Col>

              <Col span={18}>
                <div className="_7mkr">
                  <h2 className="_3rac">{categoryItem ? categoryItem.categoryName : "Consumer Packaging"}</h2>
                </div>
                
                {/* DYNAMIC PRODUCTS MAP */}
                {products && products.length > 0 && (
                  <>
                    <div className="products">
                      {products.map((prod) => (
                        <div className="col has-hover product" key={prod.id}>
                          <div className="col-inner">
                            <div className="box-product has-hover">
                              <div className="box-image customer-box-image-product">
                                <Link to={`/product/${prod.slug}`} className="_1gqs block image-zoom">
                                  <img
                                    src={prod.thumb}
                                    className="_8wjh"
                                    alt={prod.prodName}
                                  />
                                </Link>
                              </div>
                              <div className="box-text box-text-products text-left">
                                <div className="title-wrapper">
                                  <h4 className="product-title">
                                    <Link to={`/product/${prod.slug}`} className="product_link">
                                      {prod.prodName}
                                    </Link>
                                  </h4>
                                  <p className="sku">
                                    SKU: <span>{prod.sku}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                
                {/* DUMMY HTML - PRESERVED */}
                {(!products || products.length === 0) && (
                  <>
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

                  </>
                )}
                
                <Pagination
                  current={pageNum}
                  onChange={handlePageChange}
                  total={totalCount || 27}
                  defaultPageSize={9}
                  className="pagination-cntt"
                />
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
                  <p className="_0kce">Our catalog</p>
                  <h3 className="_8mak">Explore Our Catalogs</h3>
                  <p className="_8fet">
                    Through a journey of establishment and continuous
                    development, An Phat Holdings has emerged as the leading
                    high-tech, environmentally friendly plastics group in
                    Southeast Asia. With over 20 years of experience, we are
                    dedicated to delivering high-quality, sustainable products
                    across a wide range of industries. As the region’s foremost
                    innovator in eco-friendly plastic solutions, we have built a
                    strong reputation and successfully expanded our presence
                    into key global markets, including Europe, the Americas, the
                    UAE, Japan, Korea, Singapore, Taiwan, and the Philippines.
                    Driven by ongoing research, innovation, and creativity, we
                    are committed to creating enduring value for our customers,
                    investors, and employees.
                  </p>
                  <div className="_3qdw">
                    <a className="button button-outline-green" href="/catalog">
                      <span>Our Catalogs</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="image-box_image">
                  <img src="/images/website/explore.png" className="_6ikc" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
