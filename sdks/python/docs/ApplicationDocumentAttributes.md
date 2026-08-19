# ApplicationDocumentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of Required, ReceivedBack, ReceivedFront, Invalid, Approved or PendingReview, see Application Document Status. | 
**document_type** | **str** | One of IdDocument, Passport, AddressVerification, CertificateOfIncorporation, EmployerIdentificationNumberConfirmation, SocialSecurityCard, ClientRequested or SelfieVerification. | 
**description** | **str** | The document requirements description. | 
**name** | **str** | Name of business or individual. | 
**address** | [**Address**](Address.md) | Individual address, present only for the AddressVerification document type. | [optional] 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). Present only for Passport and IdDocument document types. | [optional] 
**passport** | **str** | Individual passport number. Present only for the Passport document type. | [optional] 
**ein** | **str** | Business EIN. Present only for the EmployerIdentificationNumberConfirmation document type. | [optional] 
**reason_code** | **str** | Application Document rejection reason code. Present only when document status is Invalid. One of PoorQuality, NameMismatch, SSNMismatch, AddressMismatch, DOBMismatch, ExpiredId, EINMismatch, StateMismatch, Other. | [optional] 
**reason** | **str** | Application Document rejection reason. Present only when document status is Invalid. | [optional] 
**archived** | **bool** | When true , uploading a document is disabled. | 

## Example

```python
from unit_finance_sdk.models.application_document_attributes import ApplicationDocumentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDocumentAttributes from a JSON string
application_document_attributes_instance = ApplicationDocumentAttributes.from_json(json)
# print the JSON string representation of the object
print(ApplicationDocumentAttributes.to_json())

# convert the object into a dict
application_document_attributes_dict = application_document_attributes_instance.to_dict()
# create an instance of ApplicationDocumentAttributes from a dict
application_document_attributes_from_dict = ApplicationDocumentAttributes.from_dict(application_document_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


