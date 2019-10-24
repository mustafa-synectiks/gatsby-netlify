import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import OpenPlatform from "../../images/OpenPlatform.png"
import Rehost from "../../images/Rehost.png"
import EnterprisePlatform from "../../images/Enterprise-Platform.png"
import Redevelopment from "../../images/Redevelopment.png"
import Solutions from "../../images/Solutions.png"
import transformation from "../../images/Transformation.png"
import Refactor from "../../images/Refactor.png"
import transformation2 from "../../images/transformation_2.png"
// import "../../components/layout.css"

export class Tformation extends React.Component {
  render() {
    return (
      <Layout>
        <div className="bg-lightgrey container">
          <div className="py-2">
            <div className="row main-card">
              <div className="card-deck">
                <div className="card btn card-shadow mx-3 pt-3">
                  <a href="/foundation/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={OpenPlatform}
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Open Platform
                      </h2>
                    </div>
                  </a>
                </div>

                <div className="card btn card-shadow mx-3 pt-3">
                  <a href="/transformation/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={transformation}
                      alt="Transformation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Transformation
                      </h2>
                      <h1 className="pointer text-center">&#187;</h1>
                    </div>
                  </a>
                </div>

                <div className="card btn card-shadow mx-3 pt-3">
                  <a href="/operations/index.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Solutions}
                      alt="Operation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">Solutions</h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-2 mt-5">
            <div className="my-5">
              <img src={Refactor} className="w-100 imgBx" alt="Refactor" />
            </div>
            <div className="my-5">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={transformation2}
                alt="Transformation"
              />
            </div>
            <div className="my-5">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={EnterprisePlatform}
                alt="Redevelopment Microservice"
              />
            </div>
            <div className="my-5">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={Redevelopment}
                alt="Redevelopment Analytics"
              />
            </div>
            <div className="my-5">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-100 imgBx"
                src={Rehost}
                alt="Rehost"
              />
            </div>
          </div>
        </div>
        <Helmet>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `,
            }}
          />
        </Helmet>
      </Layout>
    )
  }
}
export default Tformation
