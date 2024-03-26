import React, { useState } from "react";
import "./home.css";
import WalletModal from "../pages/WalletModal";
import SocialButtons from '../components/SocialButtons';
import Img1 from "../asserts/img1.PNG"
import logo from "../asserts/logo.png"

import Banner from "../asserts/Banner.png"
import FAQ from "../asserts/faq.png"

import Img from "../asserts/img.jpg"
import Img2 from "../asserts/img2.PNG"
import Img3 from "../asserts/img3.PNG"
import nft from "../asserts/Untitled-3.svg"

export const Home = () => {

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  // Function to open the wallet modal
  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  // Function to close the wallet modal
  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };
  return (
    <div className="container" style={{ backgroundColor: 'black' }}>
      {/* <SocialButtons /> */}
      <button
  onClick={openWalletModal}
  style={{
    backgroundColor: "yellow",
    color: "black",
    fontSize: "24px",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "20px",
    position: "absolute",
    top: "0",
    right: "0",
  }}
>
  Connect Wallet
</button>
      
      {isWalletModalOpen && <WalletModal closeModal={closeWalletModal} />}

      {/* Logo in the top-left corner */}
      <img src={logo} alt="Logo" width={100} className="logo" />
     
      {/* <img
  src={Img}
  className="small-image" // Add a class name for styling
  alt="Description"
   // Add an alt attribute for accessibility
/> */}
{/* <img src={nft} className="small-NFT" /> */}
      <div>
      <img
  src={Img}
  className="small-image" // Add a class name for styling
  alt="Description"
   // Add an alt attribute for accessibility
/>

      <h1 style={{ color: 'yellow', fontSize: '67px', marginLeft: '50px', marginBottom: '50px' }}>NINJAS KARLOS</h1>
      </div>


      <div>
  <div style={{ border: '2px dotted yellow', marginTop: '200px' }}></div>
  <div style={{ textAlign: 'center', marginTop: '10px' }}>
    <h1 style={{ color: 'yellow', fontSize: '80px' }}>MINTING</h1>
    <img
      src={nft}
      alt="Description"
      style={{ width: '327px', height: '336px', border: '2px solid yellow' }}
    />
    <br /> {/* Add a line break */}
    <h1 style={{ color: 'yellow' }}>Total Mint 1/2200</h1>
    <button style={{ backgroundColor: 'yellow', width: '200px', color: 'black', fontSize: '24px', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>Mint</button>
  </div>
</div>

      {/* <div className="mintsection" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>MINTING NFTS</h1>
  <iframe src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x01a5b133b49e8b8E92816f8442863034ef414D0D&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=49c1d436a2724a36a5088089358a780d&theme=system&primaryColor=green" width="80%" height="480px" style={{ maxWidth: '100%' }} frameBorder={0} />
</div> */}

<div style={{ border: '2px dotted yellow', marginTop: '200px' }}></div>
      <div style={{ display: 'inline-block', marginLeft: '-9px',width: '326px' ,marginTop: '200px',height:'234px',}}>
      <div style={{ backgroundColor: 'grey', padding: '5px', borderRadius: '5px', border: '2px solid yellow' }}>
  <p style={{ margin: '0', color: 'white', fontSize: '25px' }}>Total supply: &nbsp; &nbsp; &nbsp;  2200</p>
  <p style={{ margin: '0', color: 'white', fontSize: '25px' }}>Network: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; INJ</p>
  <p style={{ margin: '0', color: 'white', fontSize: '25px' }}>Price: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; NILL</p>
  <p style={{ margin: '0', color: 'white', fontSize: '25px' }}>Mint Date: &nbsp; &nbsp; &nbsp; &nbsp; NILL</p>
  <p style={{ margin: '0', color: 'white', fontSize: '25px' }}>Listing: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; NILL</p>
</div>

  <div style={{ backgroundColor: 'grey', padding: '5px', borderRadius: '5px', border: '2px solid yellow', marginTop: '70px' }}>
    <h1 style={{ color: 'yellow' }}>About NINJAS KARLOS</h1>
    <p style={{ margin: '0', color: 'white' }}>The only way I could do that was if you wanted me to. I could come and pick it out, and then I can go pick it up from your place.</p>
    <p style={{ margin: '0', color: 'white' }}>Or you could just pick me out of there, or you could pick me out...</p>
  </div>
</div>
<div style={{ marginTop: '200px' }}></div>

<div>
<iframe src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x5D19D4be7cd721D848554801B33dAaADa74d51BF&chain=%7B%22name%22%3A%22Base+Sepolia+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F84532.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Sepolia+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22basesep%22%2C%22chainId%22%3A84532%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22base-sepolia-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=dd8d935a7ea3a876d645c59e2de86798&tokenId=0&theme=light&primaryColor=purple" width="900px" height="900px" style={{maxWidth: '100%'}} frameBorder={0} />

</div>


     


  
    </div>
  );
};
