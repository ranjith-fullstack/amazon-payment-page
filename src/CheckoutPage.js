import amazonLogo from './WhatsApp Image 2024-03-11 at 7.17.48 PM.jpeg'; 
import React, { useState } from 'react';
import './CheckoutPage.css';
import image1 from './Screenshot 2024-03-09 093610.png';
import logo from './Screenshot 2024-03-10 114718.png'

const CheckoutPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isPaymentSelected, setIsPaymentSelected] = useState(false);

  const handlePaymentMethodSelect = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setIsPaymentSelected(true);
  };

  const handleUsePaymentMethod = () => {
    // Implement your logic here for using the selected payment method
    console.log("Selected Payment Method:", selectedPaymentMethod);
  };

  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Start with popup closed

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send data wherever it's needed
    console.log("Form submitted with value: ", inputValue);
    // For demonstration, clearing input value after submission
    setInputValue('');
    // Close the popup after submission
    handleClose();
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <div className='background'>
      <div className="header">
        <div className='hehe'><img src={amazonLogo} alt="Amazon Logo" className="logo" style={{backgroundColor:'#f5f5f5'}}/></div>
        <h1 style={{fontWeight:'lighter', marginTop:'40px', fontSize:'29px'}}>Checkout</h1>
        <img
          alt="Website is secured with SSL"
          src="https://m.media-amazon.com/images/G/31/x-locale/checkout/truespc/secured-ssl._CB485936980_.png"
          className="ssl-logo"
        />
      </div>

    <div style={{display:'flex'}}>
      <div>
      <div className="a-row">
      <div className="a-column">
        <h4 style={{marginTop:'-1px', color:'#0f1111'}}>
          1     <span className="a-letter-space" style={{fontSize:'18px'}}> Delivery address</span>  
         
        </h4>
      </div>

      <div className="a-column a-span5">
        <div className="displayAddressDiv">
          <ul className="displayAddressUL">
            <li style={{fontSize:'14px', marginTop:'-20px'}}>Ravi</li>
            <li style={{fontSize:'14px', marginTop:'3px'}}>Andhra tiffans near water tank </li>
            <li style={{fontSize:'14px', marginTop:'3px'}}>KPHB</li>
            <li style={{fontSize:'14px', marginTop:'3px'}}> HYD 500086</li>
          </ul>
        </div>
        <div className="a-section">
          <p className='a-link-normal-1'>Add delivery instructions</p>
        </div>
      </div>

      <div className="a-column a-span2 a-text-right a-span-last">

          <a style={{marginLeft:'180px', fontSize:'14px',color:'#007185', cursor:'pointer'}}>
            Change<span className="a-letter-space"></span>
          </a>

      </div>
    </div>
    <div className='a-column' style={{color:'#c45500'}}>
    <h4 data-testid="" className="a-color-state" style={{marginLeft:'190px', fontSize:'18px'}}>
      2    <span >Select a payment method</span> 
    </h4>
    </div>
    <div style={{backgroundColor:'#fff1e3', width:'830px', height:"60px", marginLeft:'200px', display:'flex', marginTop:'-36px'}}>
      
      <img
        alt="Amazon Pay Later"
        src="https://m.media-amazon.com/images/G/31/img16/vineet/mapleicons/Offer2_typ._CB418793369_.png"
        style={{ marginLeft:'10px', height:'50px', marginTop:'8px' }}
      />
      <div style={{marginLeft:'40px', marginTop:'28px', fontSize:'15px'}}>
            Now, continue to <strong>buy more & pay in 1-click</strong> with Amazon Pay Later.
          </div>
      </div>
      <div style={{borderBottom:'2px solid lightgray', width:'800px', marginLeft:'200px'}}>
    <div style={{borderBottom:'2px solid lightgray', borderLeft:'2px solid lightgray', borderRight:'2px solid lightgray', width:'800px', marginTop:'-15px', marginBottom:'20px', borderRadius:'10px', zIndex:'-999'}}>
      <div style={{borderBottom: '1px solid gray', width:'750px', marginLeft:'30px'}}>
      <h4 style={{fontSize:'18px', marginBottom:'8px'}}>Your available balance</h4>
      </div>

        <div className="balance-page" style={{marginLeft:'35px', marginTop:'0px' }}>   
            <span style={{color:'#ebebeb', fontSize:'30px'}}>+</span>      
            <input type="text" className="gift-card-input" placeholder="Enter code" style={{width:'250px', height:'10px', border:'1px solid black'}}/>
            <button className="apply-btn" style={{borderRadius:'5px', height:'25px', backgroundColor:'#ffffff', cursor:'pointer', border:'1px solid  gray'}}>Apply</button>
        </div>
        <div style={{fontSize:'1.1rem', fontWeight:'bold', borderBottom:'1px solid gray', marginLeft:'30px', width:'750px', marginBottom:'20px'}}>
        <p  style={{marginTop:'10px', marginBottom:'30px'}}>CREDIT &amp; DEBIT CARDS</p>
        </div>

        <div className={selectedPaymentMethod === 'creditCard' ? 'selectedPaymentMethod' : ''} style={{ backgroundColor:'#fff1e3', height:'20vh', borderRadius:'10px', marginTop:'-16px', width:'750px', marginLeft:'30px'}}>
        <div style={{display:'flex'}}>
          <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" onChange={handlePaymentMethodSelect} style={{marginTop:'20px', marginLeft:'20px'}}/>
          <label htmlFor="creditCard" style={{marginTop:'20px', marginLeft:'20px'}}>Credit or debit Card</label><br />
        </div>
        <div>
        <img src={image1} style={{height:'35px', marginTop:'20px', marginLeft:'40px'}} />
        </div>
          
          <div style={{marginLeft:'50px'}}>
            <img alt="" src="https://m.media-amazon.com/images/G/01/payments-portal/r1/PlusIcon._CB485933946_.gif"  style={{ marginRight:'20px', height:'24px' }} />
            
            <img alt="" src="https://m.media-amazon.com/images/G/01/payments-portal/r1/add-payment-method/card-logo-compact._CB478583243_.gif"  style={{ marginRight:'20px', height:'24px' }} />
            {/* <a  href="#" style={{textDecoration:'none', marginRight:'20px'}}>Enter card details </a> */}


            <button onClick={handleOpen} style={{border:'none', backgroundColor:'#fff1e3', cursor:'pointer', color:'#7445a1'}}>Enter card details</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup" style={{width:'850px', borderRadius:'6px'}}>
            <div className="popup-header" style={{backgroundColor:'#f0f2f2', justifyContent:'space-between', marginTop:'-20px', borderRadius:'6px', height:'50px', borderBottom:'1px solid lightgray'}}>
              <h2 style={{fontSize:'16px', color:'#101212', marginLeft:'20px'}}>Enter card details</h2>
              <button className="close-button" onClick={handleClose} style={{fontSize:'16px', fontWeight:'bold', marginRight:'20px'}}>X</button>
            </div>
    <div style={{display:'flex'}}>
            <div>
            <form onSubmit={handleSubmit}>
              <label style={{marginTop:'15px', marginLeft:'80px', fontSize:'14px', color:'#101212'}}> 
                Card number
                <input type="text" value={inputValue} onChange={handleChange} style={{marginLeft:'16px', height:'10px', width:'140px'}}/>
              </label>
              <label style={{marginTop:'10px', marginLeft:'100px', fontSize:'14px', color:'#101212'}}>
                Nickname
                <input type="text" style={{marginLeft:'16px', height:'10px', width:'140px'}}/>
              </label>


              <div id="add-credit-card-expiry-date-input-id">
                <label style={{marginTop:'10px', marginLeft:'92px', fontSize:'14px', color:'#101212', marginBottom:'40px'}}>
                  Expiry date
      <span className="a-dropdown-container">
        <select
          name="ppw-expirationDate_month"
          autoComplete="off"
          className="a-native-dropdown pmts-native-dropdown"
          id="pp-DVAHEd-19"
          tabIndex="0"
          style={{marginLeft:'16px', height:'25px', borderRadius:'5px', backgroundColor:'#f0f2f2', border:'none'}}>


          <option value="1" selected>01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span
          id="pp-DVAHEd-22"
          className="a-button a-button-dropdown pmts-expiry-month pmts-portal-component pmts-portal-components-pp-DVAHEd-3"
          tabIndex="-1"
          data-pmts-component-id="pp-DVAHEd-3"
          aria-hidden="true"
          style={{minWidth: '0%'}}
        >
          <span className="a-button-inner">
            <span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true">
              {/* <span className="a-dropdown-prompt">01</span> */}
            </span>
            <i className="a-icon a-icon-dropdown"></i>
          </span>
        </span>
      </span>
      <span className="a-letter-space"></span>
      <span className="a-dropdown-container">
        <select
          name="ppw-expirationDate_year"
          autoComplete="off"
          className="a-native-dropdown pmts-native-dropdown"
          id="pp-DVAHEd-21"
          tabIndex="0"
          style={{marginLeft:'16px', height:'25px', borderRadius:'5px', backgroundColor:'#f0f2f2', border:'none'}}>

          <option value="2024" selected>2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
          <option value="2033">2033</option>
          <option value="2034">2034</option>
          <option value="2035">2035</option>
          <option value="2036">2036</option>
          <option value="2037">2037</option>
          <option value="2038">2038</option>
          <option value="2039">2039</option>
          <option value="2040">2040</option>
          <option value="2041">2041</option>
          <option value="2042">2042</option>
          <option value="2043">2043</option>
          <option value="2044">2044</option>
        </select>
        <span
          id="pp-DVAHEd-23"
          className="a-button a-button-dropdown pmts-expiry-year pmts-portal-component pmts-portal-components-pp-DVAHEd-3"
          tabIndex="-1"
          data-pmts-component-id="pp-DVAHEd-3"
          aria-hidden="true"
          style={{minWidth: '0%'}}
        >
          <span className="a-button-inner">
            <span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true">
              {/* <span className="a-dropdown-prompt">2024</span> */}
            </span>
            <i className="a-icon a-icon-dropdown"></i>
          </span>
        </span>
      </span>
      </label>
    </div>
              
            </form>
            </div>
            <div>
              <img src={logo} style={{width:'400px', marginLeft:'80px'}}/>
              </div>
            </div>
            
            <div style={{backgroundColor:'#f0f2f2', height:'50px', borderRadius:'6px', borderTop:'1px solid lightgray'}}>
            <button style={{marginLeft:'630px', borderRadius:'8px', backgroundColor:'#ffffff', marginTop:'12px', border:'2px solid white', height:'30px', cursor:'pointer'}}>Cancel</button>
            <button  style={{ borderRadius:'8px', backgroundColor:'#ffd814', marginLeft:'10px', border:'none', height:'30px', width:'130px', cursor:'pointer'}}>Enter card details</button>
            </div>

          </div>
         
        </div>
        
      )}


            <span >Amazon accepts all major credit &amp; cards</span>
          </div>
           
        </div>
       
        <div >
          <div style={{display:'flex', marginLeft:'40px', marginTop:'20px'}}>
         <input type="radio" id="debitCard" name="paymentMethod" value="debitCard" onChange={handlePaymentMethodSelect} />
          <label htmlFor="debitCard" style={{marginLeft:'20px'}}>Net Banking</label><br />
          </div>
          <div className="a-fixed-left-grid-inner" style={{ paddingLeft: '48px', marginTop:'10px' }}>
      <span className="a-dropdown-container">
        <select style={{width:'135px', height:'30px', borderRadius:'10px', backgroundColor:'#f0f2f2', borderColor:'#f0f2f2'}}
          name="ppw-bankSelection_dropdown"
          id="pp-vExHUg-131"
          className="a-native-dropdown a-declarative"
          tabIndex="0"
          aria-pressed="false"
          autoComplete="off"
        >
          <option className="a-prompt" value="">Choose an Option</option>
          <optgroup label="Major Banks">
            <option value="ATP DIRECT">Airtel Payments Bank</option>
            <option value="UTI DIRECT">Axis Bank</option>
            <option value="HDF DIRECT">HDFC Bank</option>
            <option value="ICI DIRECT">ICICI Bank</option>
            <option value="162 DIRECT">Kotak Bank</option>
            <option value="SBI DIRECT">State Bank of India</option>
          </optgroup>
          <optgroup label="Other Banks">
            <option value="ALB DIRECT">Allahabad Bank</option>
            <option value="ADB DIRECT">Andhra Bank</option>
            <option value="BOI DIRECT">Bank of India</option>
            <option value="BOM DIRECT">Bank of Maharashtra</option>
            <option value="CNB DIRECT">Canara Bank</option>
            
          </optgroup>
        </select>
        <span
          id="pp-vExHUg-132"
          className="a-button a-button-dropdown"
          tabIndex="-1"
          aria-hidden="true"
          style={{ minWidth: '0%' }}
        >
          <span className="a-button-inner">
            <span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true">
            </span>
            <i className="a-icon a-icon-dropdown"></i>
          </span>
        </span>
      </span>
      <div id="pp-vExHUg-133" className="a-fixed-left-grid hide-element" style={{ display: 'block' }}>
        <div className="a-fixed-left-grid-inner" style={{ paddingLeft: '0px' }}></div>
      </div>
    </div>
          </div>


          <div>
          <div style={{display:'flex', marginLeft:'40px', marginTop:'20px'}}>
          <input type="radio" id="netBanking" name="paymentMethod" value="netBanking" onChange={handlePaymentMethodSelect} />
          <label htmlFor="netBanking" style={{marginLeft:'20px'}}>Other UPI Apps</label><br />
          </div>

          <div style={{marginLeft:'50px'}}>
            <p>Please enter your UPI ID</p>
            <input type='text' placeholder='Enter UPI ID' />
            <button style={{backgroundColor:'#ffd814', marginLeft:'20px', borderRadius:'8px', height:'30px', width:'60px', borderColor:'#ffd814'}}>Verify</button>
          </div>
          </div>


          <div>
          <div style={{display:'flex', marginLeft:'40px', marginTop:'20px'}}>
          <input type="radio" id="netBanking" name="paymentMethod" value="netBanking" onChange={handlePaymentMethodSelect} />
          <label htmlFor="netBanking" style={{marginLeft:'20px'}}>EMI</label><br />
          </div>
          {/* <div style={{ paddingLeft: '48px', marginTop:'10px' }}>
          <select style={{width:'135px', height:'30px', borderRadius:'10px', backgroundColor:'#f0f2f2', borderColor:'#f0f2f2'}}
          name="ppw-bankSelection_dropdown"
          id="pp-vExHUg-131"
          className="a-native-dropdown a-declarative"
          tabIndex="0"
          aria-pressed="false"
          autoComplete="off"
        ><option className="a-prompt" value="">Add New Card</option></select>
        
        
        <div>
        <img src={image1} style={{height:'35px', marginTop:'10px'}} />
        </div>
          
          <div style={{}}>
            <img alt="" src="https://m.media-amazon.com/images/G/01/payments-portal/r1/PlusIcon._CB485933946_.gif"  style={{ marginRight:'20px', height:'24px' }} />
            
            <img alt="" src="https://m.media-amazon.com/images/G/01/payments-portal/r1/add-payment-method/card-logo-compact._CB478583243_.gif"  style={{ marginRight:'20px', height:'24px' }} />
            <a  href="#" style={{textDecoration:'none', marginRight:'20px'}}>Enter card details </a>
            <span >Amazon accepts all major credit &amp; cards</span>
          </div>
        </div> */}
          </div>

          <div style={{display:'flex', marginLeft:'40px', marginTop:'20px'}}>
            <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" onChange={handlePaymentMethodSelect} disabled />
            <div style={{display:'block', marginTop:'20px'}}>
              <label htmlFor="cashOnDelivery" style={{marginLeft:'20px', color:'#dedede'}}>Cash on Delivery/Pay on Delivery</label>
              <span style={{marginLeft:'20px',  color:'#dedede'}}>Unavailable for this payment</span><br />
            </div>
          </div>
          <div style={{backgroundColor:'#f0f2f2', width:'800px', marginLeft:'0px', height:'50px' }}>
    <button className="use-payment-btn" onClick={handleUsePaymentMethod} disabled={!isPaymentSelected} style={{backgroundColor:'#ffd814', color:'#101212', fontWeight:'bold', borderColor:'#fffae0', borderRadius:'8px',cursor:'pointer', height:'30px', marginLeft:'20px', marginTop:'10px', marginBottom:'30px'}}>Use this payment method</button>
    </div>
    </div>
    </div>

    <div style={{width:'800px', marginLeft:'200px', marginBottom:'30px', fontSize:'18px'}}>
    <div>
    <h4 style={{marginTop:'20px', color:'#575959'}}>
          3     <span className="a-letter-space">Items and delivery</span>
          
        </h4>
    </div>
    <div  style={{display:'block', color:'#757878', fontSize:'13px'}}>
      <div style={{borderBottom:'2px solid lightgray'}}>
        Need help? Check our <a style={{color:'#65a9b5'}}>help pages</a> or <a href=""target="AmazonHelp" style={{color:'#65a9b5', textDecoration:'none'}}>contact us</a>
      </div>

      <div style={{marginTop:'20px'}}>
        When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card, debit card, or net banking), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.
      </div>

      <div >
        See Amazon.in's <a style={{color:'#65a9b5'}}>Return Policy</a>.<br /><br />Need to add more items to your order? Continue shopping on the <a href="https://www.amazon.in/ref=chk_help_homefooter_pri" style={{color:'#65a9b5', textDecoration:'none'}}>Amazon.in homepage</a>.
      </div>

      <div className="a-popover-preload" id="a-popover-">
        <div id="return-policy-help" className=" help-content"></div>
      </div>
    </div>
    </div>
    </div>






       <div >
      <div style={{border:'2px solid lightgray', width:'300px', borderRadius:'10px'}}>
        <button style={{backgroundColor:'#ffd814', color:'black', borderRadius:'10px', height:'35px', width:'250px', border:'none', cursor:'pointer', marginTop:'12px', marginLeft:'24px'}}>Use this payment method</button>
        <div style={{borderBottom:'2px solid lightgray'}}>
        <p style={{fontSize:'12px', marginLeft:'35px', marginTop:'4px'}}><span style={{marginLeft:'16px'}}>Choose a payment method to continue</span> checking out. You will still have a chance to review and edit your order before it is final.</p>
        </div>
        <div >
          <h3 style={{marginLeft:'20px'}}>Order Summary</h3>
        </div>
        <div style={{borderBottom:'2px solid lightgray', width:'260px', marginLeft:'20px'}}>
        <div style={{justifyContent:'space-between', display:'flex', fontSize:'13px'}}>
          <div>
          <p>Items: </p>
          </div>
          <div>
          <p>₹99.00</p>
          </div>
        </div>
        <div style={{justifyContent:'space-between', display:'flex', fontSize:'13px',   marginTop:'-18px'}}>
          <div>
          <p>Delivery: </p>
          </div>
          <div>
          <p>--</p>
          </div>
        </div>
        </div>
        <div style={{justifyContent:'space-between', display:'flex',borderBottom:'2px solid lightgray', width:'260px', marginLeft:'20px'}}>
          <h3 style={{ color:'#b02604'}}>Order Total:</h3>
          <p>--</p>
        </div>
        <div style={{backgroundColor:'#f0f2f2', height:'50px', borderStartEndRadius:'2px solid lightgray', marginTop:'15px', borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px'}}>
          <p style={{color:'#0a768a', cursor:"pointer", fontSize:'13px', marginLeft:'20px', marginTop:'10px', justifyContent:'center', alignItems:'center'}}>
            How are delivery costs calculated?</p>
          </div>

        </div>
      </div> 
      </div>





    </div>
  );
}

export default CheckoutPage;
