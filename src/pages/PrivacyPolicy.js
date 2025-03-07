import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h3" color="#f5a623" gutterBottom>
          Privacy Policy
        </Typography>
        
        
        <Box mt={3}>
          <Typography variant="body1" gutterBottom>
          Futurizac Limited built the Epesipay app as a Free app. This app and the website are provided
          by Futurizac Limited at no cost and is intended for use as is.
          <br/>
          This page is used to inform visitors regarding our policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use our Service.
          <br/>
          If you choose to use our Service, then you agree to the collection and use of information in
          relation to this policy. The Personal Information that we collect is used for providing and
          improving the Service. We will not use or share your information with anyone except as
          described in this Privacy Policy.
          <br/>
          The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,
          which are accessible at Epesipay unless otherwise defined in this Privacy Policy.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Information Collection and Use</Typography>
          <Typography variant="body1" gutterBottom>
          For a better experience, while using our Service, we may require you to provide us with certain
          personally identifiable information, including but not limited to social security numbers. The
          information that we request will be retained by us and used as described in this privacy policy.
          <br/> <br/>
          The app does use third-party services that may collect information used to identify you.
          Link to the privacy policy of third-party service providers used by the app
          <br/>
          - Google Play Services<br/>
          - AdMob<br/>
          - Google Analytics for Firebase<br/>
          - Firebase Crashlytics<br/>
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Log Data</Typography>
          <Typography variant="body1" gutterBottom>
          We want to inform you that whenever you use our Service, in case of an error in the app, we
          collect data and information (through third-party products) on your phone called Log Data. This
          Log Data may include information such as your device Internet Protocol (“IP”) address, device
          name, operating system version, the configuration of the app when utilizing our Service, the
          time and date of your use of the Service, and other statistics.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Cookies</Typography>
          <Typography variant="body1" gutterBottom>
          Cookies are files with a small amount of data that are commonly used as anonymous unique
          identifiers. These are sent to your browser from the websites that you visit and are stored on
          your device's internal memory. <br/>
          This Service does not use these “cookies” explicitly. However, the app may use third-party code
          and libraries that use “cookies” to collect information and improve their services. You have the
          option to either accept or refuse these cookies and know when a cookie is being sent to your
          device. If you choose to refuse our cookies, you may not be able to use some portions of this
          Service.

          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Service Providers
          </Typography>
          <Typography variant="body1" gutterBottom>
          We may employ third-party companies and individuals due to the following reasons: <br/>
          - To facilitate our Service provision;<br/>
          - To provide the Service on our behalf;<br/>
          - To perform Service-related services; or<br/>
          - To assist us in analyzing how our Service is used.<br/> <br/>
          We want to inform users of this Service that these third parties have access to their Personal
          Information. The reason is to perform the tasks assigned to them on our behalf. However, they
          are obligated not to disclose or use the information for any other purpose.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Security</Typography>
          <Typography variant="body1" gutterBottom>
          We value your trust in providing us your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. But remember that no method of transmission
          over the internet, or method of electronic storage is 100% secure and reliable, and we cannot
          guarantee its absolute security.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Links to Other Sites</Typography>
          <Typography variant="body1" gutterBottom>
          This Service may contain links to other sites. If you click on a third-party link, you will be directed
          to that site. Note that these external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="h6">Children’s Privacy</Typography>
          <Typography variant="body1" gutterBottom>
          These Services do not address anyone under the age of 13. We do not knowingly collect
          personally identifiable information from children under 13 years of age. In the case we discover
          that a child under 13 has provided us with personal information, we immediately delete this from
          our servers. If you are a parent or guardian and you are aware that your child has provided us
          with personal information, please contact us so that we will be able to take the necessary
          actions.

          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="h6">Changes to This Privacy Policy</Typography>
          <Typography variant="body1" gutterBottom>
          We may update our Privacy Policy from time to time. Thus, you are advised to review this page
          periodically for any changes. We will notify you of any changes by posting the new Privacy
          Policy on this page. <br/> <br/>
          This policy is effective as of 31-10-2022
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="h6">This policy is effective as of 31-10-2022</Typography>
          <Typography variant="body1" gutterBottom>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us
          at <b>info@futurizac.com</b>.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
