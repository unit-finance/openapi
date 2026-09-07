# CreateBusinessCreditCardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateBusinessCreditCardDataAttributes**](CreateBusinessCreditCardDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_credit_card_data import CreateBusinessCreditCardData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessCreditCardData from a JSON string
create_business_credit_card_data_instance = CreateBusinessCreditCardData.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessCreditCardData.to_json())

# convert the object into a dict
create_business_credit_card_data_dict = create_business_credit_card_data_instance.to_dict()
# create an instance of CreateBusinessCreditCardData from a dict
create_business_credit_card_data_from_dict = CreateBusinessCreditCardData.from_dict(create_business_credit_card_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


