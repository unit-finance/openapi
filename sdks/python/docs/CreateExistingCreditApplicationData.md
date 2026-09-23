# CreateExistingCreditApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateExistingCreditApplicationDataAttributes**](CreateExistingCreditApplicationDataAttributes.md) |  | 
**relationships** | [**CreateExistingCreditApplicationDataRelationships**](CreateExistingCreditApplicationDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_existing_credit_application_data import CreateExistingCreditApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExistingCreditApplicationData from a JSON string
create_existing_credit_application_data_instance = CreateExistingCreditApplicationData.from_json(json)
# print the JSON string representation of the object
print(CreateExistingCreditApplicationData.to_json())

# convert the object into a dict
create_existing_credit_application_data_dict = create_existing_credit_application_data_instance.to_dict()
# create an instance of CreateExistingCreditApplicationData from a dict
create_existing_credit_application_data_from_dict = CreateExistingCreditApplicationData.from_dict(create_existing_credit_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


