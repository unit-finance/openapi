# IndividualApplicationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. | 
**message** | **str** | A message describing the IndividualApplication status. | 
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | Optional. The date the resource was updated. | [optional] 
**ssn** | **str** | SSN of the individual (numbers only). Either ssn or passport will be populated. | [optional] 
**passport** | **str** | Individual passport number. Either ssn or passport will be populated. | [optional] 
**nationality** | **str** | Always when Passport is populated and optional when SSN is populated. Two letters representing the individual nationality (e.g. \&quot;US\&quot;). | [optional] 
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the individual. | 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | Address of the individual. | 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the individual. | 
**email** | **str** | Email address of the individual. | 
**ip** | **str** | IP address of the end-customer creating the application, if specified. | [optional] 
**sole_proprietorship** | **bool** | Optional. Indicates whether the individual is a sole proprietor, if specified. | [optional] 
**ein** | **str** | Optional. Indicates if the individual is a sole proprietor who has an Employer Identification Number, if specified. | [optional] 
**industry** | [**IndustryType**](IndustryType.md) | Optional. Indicates if the individual is a sole proprietor who has a business industry, if specified. | [optional] 
**dba** | **str** | Optional. Indicates if the individual is a sole proprietor who is doing business under a different name, if specified. | [optional] 
**archived** | **bool** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. Once an application has been archived, a new application with the same SSN (or Passport) may be submitted. An application becomes archived once the corresponding customer is archived. | 
**id_theft_score** | **float** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.individual_application_attributes import IndividualApplicationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualApplicationAttributes from a JSON string
individual_application_attributes_instance = IndividualApplicationAttributes.from_json(json)
# print the JSON string representation of the object
print(IndividualApplicationAttributes.to_json())

# convert the object into a dict
individual_application_attributes_dict = individual_application_attributes_instance.to_dict()
# create an instance of IndividualApplicationAttributes from a dict
individual_application_attributes_from_dict = IndividualApplicationAttributes.from_dict(individual_application_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


