// Home.js
import React from "react";

export default function Home() {
    return (
        <div>
        <div className="container-fluid" style={{backgroundColor:"black", padding:"8px 16px", boxSizing:"inherit"}}>
            <div className="row">
                <div className="col">
                <p className="text" style={{ font:"sans-serif ", color:"white",textAlign:"center", display: 'block', fontSize: '12px', margin:"0px", lineHeight:"12px", fontWeight:"400", whiteSpace: "pre-line", marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', unicodeBidi: 'isolate', fontFamily:"var(--f-country-simple-family)" }}>
                        Online Forex/CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 78.33% of retail investor accounts lose money
                        when trading Online Forex/CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. <span style= {{color:"yellow"}}>Learn more.</span>
                    </p>
                </div>
            </div>
          </div>
            <div className="container-fluid">
              <div className="row ms-auto">
                <div className="col ">
                  <nav className="navbar bg-body-tertiary ">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#">
                        <img src="/images/shot.png" alt="exness" width="90" height="24" className="d-inline-block align-text-top" />
                      </a>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end " >
                        <button className="btn btn-warning me-md-2  " type="button">Register</button>
                        <button className="btn btn-secondary" type="button">Sign in</button>
                      </div>                      
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                </nav>  
                </div>
            </div>
            </div>
            <div class="card text-center">
              <div className="card-body" style={{minHeight:"480px", textAlign:"center", padding:"64px 224px 32px" }}>
              <div className="container">
      <div className="row">
        <div className="col" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="rotating-bg" style={{ 
            position: 'absolute', 
            top: '0', 
            left: '0', 
            width: '100%', 
            height: '100%', 
            zIndex: '-1', 
            backgroundImage: 'url("https://d33vw3iu5hs0zi.cloudfront.net/media/sm_home_header_background_xs_sm_570681f373.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            animation: 'rotate 20s linear infinite',
            '@keyframes rotate': {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' }
            }
          }}>
          </div>
          <div className="card text-center" style={{ minHeight: '480px', textAlign: 'center', padding: '64px 224px 32px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div>
              <h1 className="card-title" style={{ margin: '0', fontSize: '32px', lineHeight: 'px', fontWeight: '500', padding: '0px 24px', fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line', color: 'white' }}>Upgrade the way </h1>
              <h1 className="card-title" style={{ margin: '0', fontSize: '32px', lineHeight: '36px', fontWeight: '500', fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line', color: 'white' }}>you trade</h1>
              <p className="card-text" style={{ margin: '0', fontSize: '18px', lineHeight: '26px', fontWeight: '400', fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line', marginTop: '16px', color: 'white' }}>
                Trade with the world’s largest retail broker and benefit from
              </p>
              <p className="card-text" style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', unicodeBidi: 'isolate', color: 'white' }}>
                better-than-market conditions.
              </p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center " style={{ marginBottom: '70px' }}>
              <button className="btn btn-warning me-md-2  " type="button">Register</button>
              <button className="btn btn-secondary" type="button">Try free demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>

                <div className="card-group" >
  <div className="card" >
    <div className="row g-0">
      <div className="col-md-1">
        <img src="	https://d33vw3iu5hs0zi.cloudfront.net/media/users_group_4fae4ed806.svg" className="img-fluid rounded-start" alt="..." style={{ width: '24px', height: '24px', marginRight: '8px' }} />
      </div>
      <div className="col-md-8">
          <p className="card-text" style={{ margin: 0, fontSize: '16px', lineHeight: '24px', fontWeight: 400, fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line' }}>700,000+ active traders</p>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="row g-0">
      <div className="col-md-1">
        <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/license_831ed49ca9.svg" className="img-fluid rounded-start" alt="..." style={{ width: '24px', height: '24px', marginRight: '8px' }} />
      </div>
      <div className="col-md-8">
          <p className="card-text" style={{ margin: 0, fontSize: '16px', lineHeight: '24px', fontWeight: 400, fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line' }}>Multiple regulatory licenses</p>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="row g-0">
      <div className="col-md-1">
        <img src="	https://d33vw3iu5hs0zi.cloudfront.net/media/custom_support_78bcff8edb.svg" className="img-fluid rounded-start" alt="..." style={{ width: '24px', height: '24px', marginRight: '8px' }} />
      </div>
      <div className="col-md-8">
          <p className="card-text" style={{ margin: 0, fontSize: '16px', lineHeight: '24px', fontWeight: 400, fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line' }}>24/7 customer support</p>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="row g-0">
      <div className="col-md-1">
        <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/certificate_090f2be3df.svg" className="img-fluid rounded-start" alt="..." style={{ width: '24px', height: '24px', marginRight: '8px' }} />
      </div>
      <div className="col-md-8">
          <p className="card-text" style={{ margin: "0px", fontSize: '16px', lineHeight: '24px', fontWeight: 400, fontFamily: 'var(--f-country-simple-family)', whiteSpace: 'pre-line' }}>PCI DSS certified</p>
      </div>
    </div>
  </div>
</div>
              </div>
              
            </div>
        </div>
    );
}