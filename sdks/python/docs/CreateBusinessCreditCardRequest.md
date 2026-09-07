# CreateBusinessCreditCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBusinessCreditCardData**](CreateBusinessCreditCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_credit_card_request import CreateBusinessCreditCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessCreditCardRequest from a JSON string
create_business_credit_card_request_instance = CreateBusinessCreditCardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessCreditCardRequest.to_json())

# convert the object into a dict
create_business_credit_card_request_dict = create_business_credit_card_request_instance.to_dict()
# create an instance of CreateBusinessCreditCardRequest from a dict
create_business_credit_card_request_from_dict = CreateBusinessCreditCardRequest.from_dict(create_business_credit_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


