import { Tab, Tabs } from "react-bootstrap";
import ShortenUrlList from "./shortenUrlList/ShortenUrlList";
import PersonalizeUrl from "./personalizeUrl/PersonalizeUrl";

function ManageShortUrl() {
    const templates = [
        {
            _id: "1A1212D",
            userName: 'demo',
            templateName: 'testadcsda',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'IMAGE',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 16, 2024'
        },
        {
            _id: "1B1212D",
            userName: 'demo',
            templateName: 'dfbnvjfbdjvf',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'NONE',
            language: 'ar',
            status: 'APPROVED',
            createdAt: ' Aug 20, 2024, 5:23:48 PM '
        },
        {
            _id: "1C1212D",
            userName: 'demo',
            templateName: 'test_11_aug_24',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'TEXT',
            language: 'en',
            status: 'APPROVED',
            createdAt: ' Aug 20, 2024, 5:23:48 PM '
        },
        {
            _id: "1D1212D",
            userName: 'demo',
            templateName: 'testing_with_aliya',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'IMAGE',
            language: 'en',
            status: 'APPROVED',
            createdAt: ' Aug 20, 2024, 5:23:48 PM '
        },
        {
            _id: "1E1212D",
            userName: 'demo_user',
            templateName: 'welcome_message',
            phoneNumber: '+918765432109',
            templateType: 'customer_service',
            headerType: 'VIDEO',
            language: 'es',
            status: 'PENDING',
            createdAt: ' Aug 20, 2024, 5:23:48 PM '
        }
    ];



    return (
        <>
            <Tabs
                defaultActiveKey="shortenUrlList"
                id="uncontrolled-tab-example"
            >

                <Tab eventKey="shortenUrlList" title="Shorten Url List">
                    <ShortenUrlList templates={templates}/>
                </Tab>
                <Tab eventKey="Personalise Url" title="Personalise Url">
                <PersonalizeUrl templates={templates}/>
                </Tab>
                
            </Tabs>
            
        </>
    );
}

export default ManageShortUrl
