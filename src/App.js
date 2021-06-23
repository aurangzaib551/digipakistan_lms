import React from "react";
import { Switch, Route } from "react-router-dom";
import AmazonFBABusiness from "./components/lectures/amazonFBABusiness";

import AndroidAppsDevelopment from "./components/lectures/androidAppsDevelopment";

import ArtificialIntelligence from "./components/lectures/artificialIntelligence";

import AspWebApplications from "./components/lectures/aspWebApplications";

import AwsCloudComputing from "./components/lectures/awsCloudComputing";

import AwsDeveloperAssociate from "./components/lectures/awsDeveloperAssociate";

import AwsPractitioner from "./components/lectures/awsPractitioner";

import AwsSolutionArchitect from "./components/lectures/awsSolutionArchitect";

import BigDataAndHeadoopEcosystem from "./components/lectures/bigDataAndHeadoopEcosystem";

import BlockchainTechnology from "./components/lectures/blockchainTechnology";

import CertifiedInformationSystemAuditor from "./components/lectures/certifiedInformationSystemAuditor";

import CiscoCCNANetworking from "./components/lectures/ciscoCCNANetworking";

import CompTIAItFundamentals from "./components/lectures/compTIAItFundamentals";

import DataScience from "./components/lectures/dataScience";
import DigitalForensicCyberSecurity from "./components/lectures/digitalForensicCyberSecurity";

import Enterpreneurship from "./components/lectures/enterpreneurship";

import FullStackWebDevelopment from "./components/lectures/fullStackWebDevelopment";

import GameDevelopment from "./components/lectures/gameDevelopment";

import GoogleCloudEngineering from "./components/lectures/googleCloudEngineering";

import GraphicDesign from "./components/lectures/graphicDesign";
import InteriorDesign from "./components/lectures/interiorDesign";

import IosAppsDevelopment from "./components/lectures/iosAppsDevelopment";

import Iot from "./components/lectures/iot";
import KotlinMobileAppsDevelopment from "./components/lectures/kotlinMobileAppsDevelopment";

import MachineLeadringAndAI from "./components/lectures/machineLeadringAndAI";

import MernStack from "./components/lectures/mernStack";
import MicrosoftAzureCloudFundamentals from "./components/lectures/microsoftAzureCloudFundamentals";

import MicrosoftCloudAdministrator from "./components/lectures/microsoftCloudAdministrator";

import MicrosoftFrontEndDevelopment from "./components/lectures/microsoftFrontEndDevelopment";

import MicrosoftOfficew365 from "./components/lectures/microsoftOfficew365";

import OracleDatabaseAdministrator from "./components/lectures/oracleDatabaseAdministrator";

import PenetrationTestingCyberSecurity from "./components/lectures/penetrationTestingCyberSecurity";

import PhpLaravel from "./components/lectures/phpLaravel";
import Python from "./components/lectures/python";
import QuickbookERP from "./components/lectures/quickbookERP";
import ReactNativeWebAndAppsDevelopment from "./components/lectures/reactNativeWebAndAppsDevelopment";

import SAPERP from "./components/lectures/SAPERP";
import SearchEngineOptimization from "./components/lectures/searchEngineOptimization";

import SocialMediaMarketing from "./components/lectures/socialMediaMarketing";

import SqlServerSpecialist from "./components/lectures/sqlServerSpecialist";

import Uiux from "./components/lectures/uiux";
import VideoEditing from "./components/lectures/videoEditing";
import XamarinMobileAppsDevelopment from "./components/lectures/xamarinMobileAppsDevelopment";
import LogIn from "./pages/login";
import Dashboard from "./pages/dashboard";
import Info from "./pages/info";
import Quizizz from "./pages/quizizz";
import Assignments from "./pages/assignments";
import Lectures from "./pages/lectures";
import certifiedInformationSecurityManager from "./components/lectures/certifiedInformationSecurityManager";

import CompTIASecurityPlus from "./components/lectures/compTIASecurityPlus";

import CertifiedHackingForensicInvestigator from "./components/lectures/certifiedHackingForensicInvestigator";

import CisspCyberSecurityProfessional from "./components/lectures/cisspCyberSecurityProfessional";

import ProjectManagementProfessional from "./components/lectures/projectManagementProfessional";

import CertifiedEthicalHacking from "./components/lectures/certifiedEthicalHacking";

import PenetrationTestingSecurityAnalyst from "./components/lectures/penetrationTestingSecurityAnalyst";

import AwsSysOpsAdministrator from "./components/lectures/awsSysOpsAdministrator";

import DigitalMarketing from "./components/lectures/digitalMarketing";

import MayaMaxAnimation3D from "./components/lectures/3dMayaMaxAnimation";

import Autocad from "./components/lectures/autocad";
import Profile from "./pages/profile";
import HelpCenter from "./pages/helpCenter";
import ForgotPassword from "./pages/forgotPassword";
import Announcements from "./pages/announcements";
import Policy from "./pages/policy";
import RegisterTeacher from "./pages/registerTeacher";
import uploadAssignment from "./pages/uploadAssignment";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/info" component={Info} />
      <Route path="/quizizz" component={Quizizz} />
      <Route path="/assignments" component={Assignments} />
      <Route path="/help" component={HelpCenter} />
      <Route path="/profile" component={Profile} />
      <Route path="/policy" component={Policy} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/announcements" component={Announcements} />
      <Route path="/registerTeacher" component={RegisterTeacher} />
      <Route
        path="/lmsDashboard/myCourses/frontEndLMS"
        exact
        component={MicrosoftFrontEndDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/dataScienceLMS"
        exact
        component={DataScience}
      />
      <Route
        path="/lmsDashboard/myCourses/aspDotNetLMS"
        exact
        component={AspWebApplications}
      />
      <Route
        path="/lmsDashboard/myCourses/phpLaravelLMS"
        exact
        component={PhpLaravel}
      />
      <Route
        path="/lmsDashboard/myCourses/mernStackLMS"
        exact
        component={MernStack}
      />
      <Route
        path="/lmsDashboard/myCourses/sqlServerSpecialistLMS"
        exact
        component={SqlServerSpecialist}
      />
      <Route
        path="/lmsDashboard/myCourses/oracleDatabaseLMS"
        exact
        component={OracleDatabaseAdministrator}
      />
      <Route
        path="/lmsDashboard/myCourses/androidAppLMS"
        exact
        component={AndroidAppsDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/iosAppLMS"
        exact
        component={IosAppsDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/xamarinAppLMS"
        exact
        component={XamarinMobileAppsDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/reactNativeLMS"
        exact
        component={ReactNativeWebAndAppsDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/gameDevelopmentLMS"
        exact
        component={GameDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/ccnaNetworkingLMS"
        exact
        component={CiscoCCNANetworking}
      />
      <Route
        path="/lmsDashboard/myCourses/graphicDesignLMS"
        exact
        component={GraphicDesign}
      />
      <Route
        path="/lmsDashboard/myCourses/videoEditingLMS"
        exact
        component={VideoEditing}
      />
      <Route
        path="/lmsDashboard/myCourses/seoLMS"
        exact
        component={SearchEngineOptimization}
      />
      <Route
        path="/lmsDashboard/myCourses/socialMediaLMS"
        exact
        component={SocialMediaMarketing}
      />
      <Route
        path="/lmsDashboard/myCourses/amazonFbaBusinessLMS"
        exact
        component={AmazonFBABusiness}
      />
      <Route
        path="/lmsDashboard/myCourses/projectManagementProfessionalLMS"
        exact
        component={ProjectManagementProfessional}
      />
      <Route
        path="/lmsDashboard/myCourses/digitalForensicCyberSecurityLMS"
        exact
        component={DigitalForensicCyberSecurity}
      />
      <Route
        path="/lmsDashboard/myCourses/penetrationTestingCyberSecurityLMS"
        exact
        component={PenetrationTestingCyberSecurity}
      />
      <Route
        path="/lmsDashboard/myCourses/artificialIntelligenceLMS"
        exact
        component={ArtificialIntelligence}
      />
      <Route
        path="/lmsDashboard/myCourses/cloudComputingLMS"
        exact
        component={AwsCloudComputing}
      />
      <Route
        path="/lmsDashboard/myCourses/fullStackWebDevelopmentLMS"
        exact
        component={FullStackWebDevelopment}
      />
      <Route path="/lmsDashboard/myCourses/iotLMS" exact component={Iot} />
      <Route
        path="/lmsDashboard/myCourses/blockChainLMS"
        exact
        component={BlockchainTechnology}
      />
      <Route
        path="/lmsDashboard/myCourses/comptiaItFundamentalsLMS"
        exact
        component={CompTIAItFundamentals}
      />
      <Route
        path="/lmsDashboard/myCourses/kotlinMobileAppsDevelopmentLMS"
        exact
        component={KotlinMobileAppsDevelopment}
      />
      <Route
        path="/lmsDashboard/myCourses/comptiaSecurityPlusLMS"
        exact
        component={CompTIASecurityPlus}
      />
      <Route
        path="/lmsDashboard/myCourses/certifiedEthicalHackingLMS"
        exact
        component={CertifiedEthicalHacking}
      />
      <Route
        path="/lmsDashboard/myCourses/certifiedHackingForensicInvestigatorLMS"
        exact
        component={CertifiedHackingForensicInvestigator}
      />
      <Route
        path="/lmsDashboard/myCourses/penetrationTestingSecurityAnalystLMS"
        exact
        component={PenetrationTestingSecurityAnalyst}
      />
      <Route
        path="/lmsDashboard/myCourses/certifiedInformationSystemAuditorLMS"
        exact
        component={CertifiedInformationSystemAuditor}
      />
      <Route
        path="/lmsDashboard/myCourses/awsPractitionerLMS"
        exact
        component={AwsPractitioner}
      />
      <Route
        path="/lmsDashboard/myCourses/awsSolutionArchitectLMS"
        exact
        component={AwsSolutionArchitect}
      />
      <Route
        path="/lmsDashboard/myCourses/awsSysOpsAdministratorLMS"
        exact
        component={AwsSysOpsAdministrator}
      />
      <Route
        path="/lmsDashboard/myCourses/awsDeveloperAssociateLMS"
        exact
        component={AwsDeveloperAssociate}
      />
      <Route
        path="/lmsDashboard/myCourses/microsoftAzureCloudFundamentalsLMS"
        exact
        component={MicrosoftAzureCloudFundamentals}
      />
      <Route
        path="/lmsDashboard/myCourses/microsoftCloudAdministratorLMS"
        exact
        component={MicrosoftCloudAdministrator}
      />
      <Route
        path="/lmsDashboard/myCourses/googleCloudEngineerLMS"
        exact
        component={GoogleCloudEngineering}
      />
      <Route
        path="/lmsDashboard/myCourses/pythonForEveryoneLMS"
        exact
        component={Python}
      />
      <Route
        path="/lmsDashboard/myCourses/machineLearningAndAILMS"
        exact
        component={MachineLeadringAndAI}
      />
      <Route
        path="/lmsDashboard/myCourses/bigDataAndHeadoopEcosystemLMS"
        exact
        component={BigDataAndHeadoopEcosystem}
      />
      <Route
        path="/lmsDashboard/myCourses/quickBooksERPLMS"
        exact
        component={QuickbookERP}
      />
      <Route
        path="/lmsDashboard/myCourses/sapERPLMS"
        exact
        component={SAPERP}
      />
      <Route
        path="/lmsDashboard/myCourses/digitalMarketingLMS"
        exact
        component={DigitalMarketing}
      />
      <Route
        path="/lmsDashboard/myCourses/uiUXDesignLMS"
        exact
        component={Uiux}
      />
      <Route
        path="/lmsDashboard/myCourses/interiorDesignLMS"
        exact
        component={InteriorDesign}
      />
      <Route
        path="/lmsDashboard/myCourses/3dMayaMaxAnimationLMS"
        exact
        component={MayaMaxAnimation3D}
      />
      <Route
        path="/lmsDashboard/myCourses/autocadLMS"
        exact
        component={Autocad}
      />
      <Route
        path="/lmsDashboard/myCourses/microsoftOffice365LMS"
        exact
        component={MicrosoftOfficew365}
      />
      <Route
        path="/lmsDashboard/myCourses/enterpreneurshipLMS"
        exact
        component={Enterpreneurship}
      />
      <Route
        path="/lmsDashboard/myCourses/cisspCyberSecurityProfessionalLMS"
        exact
        component={CisspCyberSecurityProfessional}
      />
      <Route
        path="/lmsDashboard/myCourses/certifiedInformationSecurityManagerLMS"
        component={certifiedInformationSecurityManager}
      />
      <Route path="/lectures" component={Lectures} />
      <Route path="/uploadAssignment" component={uploadAssignment} />
    </Switch>
  );
};

export default App;
