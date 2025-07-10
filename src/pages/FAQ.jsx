import React from "react";

function FAQ() {
  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="container">
          <h1 className="page-title">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="page-subtitle">Common questions about cardiac surgery and procedures</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            <div className="faq-item">
              <h3>What types of cardiac surgeries do you perform?</h3>
              <p>I specialize in adult and pediatric cardiac surgery, including coronary artery bypass, valve replacement, congenital heart defect repair, and heart transplantation procedures. I also perform minimally invasive procedures when appropriate.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long is the recovery time after cardiac surgery?</h3>
              <p>Recovery time varies depending on the procedure and individual patient factors. Generally, patients can expect 6-12 weeks for full recovery, with most returning to normal activities within 3-6 months. Minimally invasive procedures often have shorter recovery times.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer minimally invasive procedures?</h3>
              <p>Yes, I perform minimally invasive cardiac procedures when appropriate. These techniques often result in smaller incisions, less pain, and faster recovery times compared to traditional open-heart surgery. The suitability depends on your specific condition.</p>
            </div>
            
            <div className="faq-item">
              <h3>What should I expect during my consultation?</h3>
              <p>During your consultation, I will review your medical history, perform a physical examination, discuss your symptoms, and may order additional tests. We'll discuss treatment options, risks, benefits, and answer any questions you may have.</p>
            </div>
            
            <div className="faq-item">
              <h3>How can I schedule a consultation?</h3>
              <p>You can contact me through the contact information provided on this website. I'm available for consultations and second opinions for cardiac surgical procedures. You can also use the contact form to send me a message.</p>
            </div>
            
            <div className="faq-item">
              <h3>What are the risks of cardiac surgery?</h3>
              <p>All surgeries carry some risks, including bleeding, infection, and reactions to anesthesia. Cardiac surgery specifically may involve risks such as irregular heart rhythms, stroke, or kidney problems. I will discuss all potential risks with you before any procedure.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you perform robotic-assisted surgery?</h3>
              <p>Yes, I am trained in robotic-assisted cardiac surgery techniques. These procedures offer enhanced precision and may be suitable for certain types of cardiac procedures, particularly valve surgery and some coronary bypass procedures.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is the difference between valve repair and valve replacement?</h3>
              <p>Valve repair preserves your own valve tissue and is often preferred when possible, as it may provide better long-term outcomes. Valve replacement involves replacing the damaged valve with either a mechanical or biological prosthesis. The choice depends on the specific valve condition.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I prepare for cardiac surgery?</h3>
              <p>Preparation typically includes stopping certain medications, fasting before surgery, and undergoing pre-operative tests. I will provide detailed instructions specific to your procedure and medical condition. It's important to follow all pre-operative instructions carefully.</p>
            </div>
            
            <div className="faq-item">
              <h3>What follow-up care is required after surgery?</h3>
              <p>Follow-up care includes regular check-ups, medication management, cardiac rehabilitation, and lifestyle modifications. I will provide a comprehensive post-operative care plan tailored to your specific procedure and recovery needs.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you treat pediatric patients?</h3>
              <p>Yes, I have extensive experience in pediatric cardiac surgery, including treatment of congenital heart defects in children. I work with a multidisciplinary team to provide comprehensive care for pediatric patients and their families.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is heart transplantation and when is it needed?</h3>
              <p>Heart transplantation is a surgical procedure to replace a failing heart with a healthy donor heart. It's typically considered for patients with end-stage heart failure who have exhausted other treatment options. I specialize in heart transplantation and mechanical circulatory support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ; 