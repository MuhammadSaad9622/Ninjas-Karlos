import React from "react";
import "./home.css";
import SocialButtons from '../components/SocialButtons';
import Img1 from "../asserts/img1.PNG"
import logo from "../asserts/logo.png"

import Banner from "../asserts/Banner.png"
import FAQ from "../asserts/faq.png"


import Img2 from "../asserts/img2.PNG"
import Img3 from "../asserts/img3.PNG"

export const Home = () => {
  return (
    <div>
      <SocialButtons />
      <img
        src={Banner}
        width="980"
        height="846"
        class="style-6xOkQ fordesktop"
        id="style-6xOkQ"
      />
      <div className="buttons">
        <div className="soon">
          Now
        </div>
        <div className="soon">
          Soon
        </div>
        <div className="after">
          After
        </div>
      </div>

      <div className="formob">
        <center>
          <img src="https://static.wixstatic.com/media/d7e659_335ee195e3af43b993abf4a208edc072~mv2.png/v1/crop/x_0,y_162,w_500,h_147/fill/w_158,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7e659_335ee195e3af43b993abf4a208edc072~mv2.png" alt="" />
        </center>

        <center>
          <h2 className="green">Our Purpose:</h2>
        </center>
        <center>
          <h2 className="pdes">The Purpose is to build a community with the believe of it happening</h2>
        </center>
        <center>
          <h2>From NFT to to Tokens to Education</h2>
        </center>

        <div className="images">
          <div className="img1">
            <img src={Img1} alt="" />
            <h2 className="green">The Fairy NFT</h2>
            <p>
              It is a rebirth of an excisting excitement to build a team
              and a purpose towards a wonderful project.Then,get to Jerry
            </p>
            <div className="soon">
              Now
            </div>
          </div>

          <div className="img1">
            <img src={Img2} alt="" />
            <h2 className="green">The Jery NFT</h2>
            <p>
              Fairy holders gets the ultimate access to it.Tokens are given to the ones who gets it.Jerry holders will be the first with $Berry
            </p>
            <div className="soon">
              Soon
            </div>
          </div>

          <div className="img1">
            <img src={Img3} alt="" />
            <h2 className="green">$Berry tokens</h2>
            <p>
              The tokens will be publicly traded.This will be the basis of our foundation:
              <br />
              Education for kids
            </p>
            <div className="soon">
              After
            </div>
          </div>
        </div>

      </div>


      <div className="mintsection">
        <div>
          {/* <p>
            xxx Mint dapp with rainbow wallet placed here xxx</p>
          <br />
          <button className="mint">Mint...</button> */}
          <iframe src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x01a5b133b49e8b8E92816f8442863034ef414D0D&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=49c1d436a2724a36a5088089358a780d&primaryColor=purple" width="600px" height="660px" style={{ maxWidth: '100%' }} frameBorder={0} />
        </div>
        <div className="faqsection">
          <h1 className="soon">F.A.Q</h1>
          <img src={FAQ} />
        </div>
      </div>

      <div className="fairyNft">
        <center>
          <h2 className="fairy green">Fairy <span className="yellow nft"> NFT </span></h2>
        </center>
        <center>
          <h3 className="cool ">With the <span className="green"> cool</span>- <span className="yellow"> vibe </span> fairy style themed characters,
            We could well <span className="yellow"> deGen </span> more than 1,000,000+ of them.

            But we just want to allow <span className="green"> 5,555 </span> to be out there.</h3>

        </center>

      </div>

      <div className="characters">
        <div className="character1">
          <h1 className="yellow">10</h1>
          <h2 className="green">Characters</h2>
          <img src="https://static.wixstatic.com/media/d7e659_ea3114c8579c48cb9d877e0cc1126db3~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7e659_ea3114c8579c48cb9d877e0cc1126db3~mv2.png" alt="" />
        </div>

        <div className="character1">
          <h1 className="green">15</h1>
          <h2 className="yellow">Dresses</h2>
          <img src="https://static.wixstatic.com/media/d7e659_f683c000547745c582b3f99bbd0ede6e~mv2.png/v1/fill/w_331,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7e659_f683c000547745c582b3f99bbd0ede6e~mv2.png" alt="" />
        </div>

        <div className="character1">
          <h1 className="green">89</h1>
          <h2 className="yellow">Special Add-ons</h2>
          <br />
          <br />

          <img src="https://static.wixstatic.com/media/d7e659_a2e36eadb0414a67b01a98bd507cc986~mv2.png/v1/fill/w_189,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7e659_a2e36eadb0414a67b01a98bd507cc986~mv2.png" className="rocket" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <center>
        <h1 className="green workofart">work <span className="yellow"> of </span> art</h1>
      </center>
      <div className="progallery">
        {/* <div id="pro-gallery-margin-container-comp-kdfwq3s6" className="pro-gallery-margin-container style-ICp7Y"> */}
        <div>
          <div className="gallery-item-container visible invert-on-hover style-Nfs93" id="pgia7b278ce44c44425b6725515da0c53b6_0">
            <div>
              <div className="gallery-item-wrapper visible [object style-V5W6d" id="item-wrapper-a7b278ce-44c4-4425-b672-5515da0c53b6">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-BlC9O" id="style-BlC9O">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-T1B4E" src="https://static.wixstatic.com/media/d7e659_7f8b444d94d1467fb8bf16d976bc8531~mv2.png/v1/fill/w_281,h_280,fp_0.5_0.24,q_90/d7e659_7f8b444d94d1467fb8bf16d976bc8531~mv2.png" id="style-T1B4E" />
                  </picture>
                </div>
                <div className="style-FWYUc" id="style-FWYUc">
                  <div className="gallery-item-hover style-Qj3JX" id="style-Qj3JX">
                    <div className="gallery-item-hover-inner">
                      <div id="style-8AKvA" className="style-8AKvA">
                        <div className="style-GWVpB" id="style-GWVpB">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-4AHAo" id="pgid93f2e2176914e67847a7af98034ce46_1">
            <div>
              <div className="gallery-item-wrapper visible [object style-yPpzZ" id="item-wrapper-d93f2e21-7691-4e67-847a-7af98034ce46">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-7gY6l" id="style-7gY6l">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-4yOQ5" src="https://static.wixstatic.com/media/d7e659_9330019bb7484c70ab784bf74cf9e1a4~mv2.png/v1/fill/w_281,h_280,q_90/d7e659_9330019bb7484c70ab784bf74cf9e1a4~mv2.png" id="style-4yOQ5" />
                  </picture>
                </div>
                <div className="style-43JOo" id="style-43JOo">
                  <div className="gallery-item-hover style-OHnhF" id="style-OHnhF">
                    <div className="gallery-item-hover-inner">
                      <div id="style-gNf8m" className="style-gNf8m">
                        <div className="style-1Wc5I" id="style-1Wc5I">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-PPsl1" id="pgie02791238f9b4304b007b51cd12ad6ba_2">
            <div>
              <div className="gallery-item-wrapper visible [object style-6csvt" id="item-wrapper-e0279123-8f9b-4304-b007-b51cd12ad6ba">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-zKK9Z" id="style-zKK9Z">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-dRoha" src="https://static.wixstatic.com/media/d7e659_c7524ec491cd4e22a13253e46d1bce10~mv2.png/v1/fill/w_281,h_280,q_90/d7e659_c7524ec491cd4e22a13253e46d1bce10~mv2.png" id="style-dRoha" />
                  </picture>
                </div>
                <div className="style-oabi2" id="style-oabi2">
                  <div className="gallery-item-hover style-ecId1" id="style-ecId1">
                    <div className="gallery-item-hover-inner">
                      <div id="style-P3Plk" className="style-P3Plk">
                        <div className="style-IvtyT" id="style-IvtyT">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-nSJ6J" id="pgi29ebc1b46ee748dba3eb72dcea4ec431_3">
            <div>
              <div className="gallery-item-wrapper visible [object style-lBeH5" id="item-wrapper-29ebc1b4-6ee7-48db-a3eb-72dcea4ec431">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-vPfFb" id="style-vPfFb">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-N2z4A" src="https://static.wixstatic.com/media/d7e659_557e1e19e0984b09a19ebe14d2785389~mv2.png/v1/fill/w_280,h_280,q_90/d7e659_557e1e19e0984b09a19ebe14d2785389~mv2.png" id="style-N2z4A" />
                  </picture>
                </div>
                <div className="style-iWtzf" id="style-iWtzf">
                  <div className="gallery-item-hover style-eRf2A" id="style-eRf2A">
                    <div className="gallery-item-hover-inner">
                      <div id="style-dmfoT" className="style-dmfoT">
                        <div className="style-7tizN" id="style-7tizN">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-7rGtQ" id="pgi3def5e09eb374442b858008566c85174_4">
            <div>
              <div className="gallery-item-wrapper visible [object style-lD1S6" id="item-wrapper-3def5e09-eb37-4442-b858-008566c85174">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-aHSlZ" id="style-aHSlZ">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-jem6Y" src="https://static.wixstatic.com/media/d7e659_c4d416488e974fa593aee593f2a86af5~mv2.png/v1/fill/w_281,h_280,q_90/d7e659_c4d416488e974fa593aee593f2a86af5~mv2.png" id="style-jem6Y" />
                  </picture>
                </div>
                <div className="style-hbEEq" id="style-hbEEq">
                  <div className="gallery-item-hover style-XZmRt" id="style-XZmRt">
                    <div className="gallery-item-hover-inner">
                      <div id="style-o7p7y" className="style-o7p7y">
                        <div className="style-POjnF" id="style-POjnF">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-Q5zTX" id="pgi5b35552002d64f86882e4ce21f5dd18d_5">
            <div>
              <div className="gallery-item-wrapper visible [object style-x3NQr" id="item-wrapper-5b355520-02d6-4f86-882e-4ce21f5dd18d">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-rc9F9" id="style-rc9F9">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-7s57e" src="https://static.wixstatic.com/media/d7e659_8bebdc21cf6a4d5fbd24a87fe9cebb10~mv2.png/v1/fill/w_281,h_280,q_90/d7e659_8bebdc21cf6a4d5fbd24a87fe9cebb10~mv2.png" id="style-7s57e" />
                  </picture>
                </div>
                <div className="style-R1oOQ" id="style-R1oOQ">
                  <div className="gallery-item-hover style-forSZ" id="style-forSZ">
                    <div className="gallery-item-hover-inner">
                      <div id="style-Xox44" className="style-Xox44">
                        <div className="style-FMQtW" id="style-FMQtW">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-dDx11" id="pgi2a1ba2fbebb74e2f8e4a813298cb872f_6">
            <div>
              <div className="gallery-item-wrapper visible [object style-d7hVC" id="item-wrapper-2a1ba2fb-ebb7-4e2f-8e4a-813298cb872f">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-T2syi" id="style-T2syi">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-jwsmZ" src="https://static.wixstatic.com/media/d7e659_b178418171664ac882f4c041b513ce11~mv2.png/v1/fill/w_281,h_280,q_90/d7e659_b178418171664ac882f4c041b513ce11~mv2.png" id="style-jwsmZ" />
                  </picture>
                </div>
                <div className="style-L7nIF" id="style-L7nIF">
                  <div className="gallery-item-hover style-kUhcL" id="style-kUhcL">
                    <div className="gallery-item-hover-inner">
                      <div id="style-GG42R" className="style-GG42R">
                        <div className="style-Mj7Hq" id="style-Mj7Hq">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-item-container visible invert-on-hover style-WoYmT" id="pgi30c044445857431c91a41fd5f256ff4e_7">
            <div>
              <div className="gallery-item-wrapper visible [object style-lCfjG" id="item-wrapper-30c04444-5857-431c-91a4-1fd5f256ff4e">
                <div className="gallery-item-content gallery-item gallery-item-preloaded style-jKZcj" id="style-jKZcj">
                  <picture>
                    <img className="gallery-item gallery-item-preloaded style-Zl4Fh" src="https://static.wixstatic.com/media/d7e659_a1179c6759a44e8dbe79dcb85c820388~mv2.png/v1/fill/w_280,h_280,q_90/d7e659_a1179c6759a44e8dbe79dcb85c820388~mv2.png" id="style-Zl4Fh" />
                  </picture>
                </div>
                <div className="style-8MJxN" id="style-8MJxN">
                  <div className="gallery-item-hover style-i64cJ" id="style-i64cJ">
                    <div className="gallery-item-hover-inner">
                      <div id="style-53Rjn" className="style-53Rjn">
                        <div className="style-QxcEV" id="style-QxcEV">
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="footer">
        <h3 className="green">
          This is our <span className="yellow">fight</span>  for a <span className="yellow">change</span> in the <span className="yellow">world</span>.</h3>
        <img src={logo} width={65} className="flogo" alt="" />
      </div>
    </div>
  );
};
