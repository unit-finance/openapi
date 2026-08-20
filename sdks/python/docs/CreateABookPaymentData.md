# CreateABookPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateABookPaymentDataAttributes**](CreateABookPaymentDataAttributes.md) |  | 
**relationships** | [**CreateABookPaymentDataRelationships**](CreateABookPaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_a_book_payment_data import CreateABookPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateABookPaymentData from a JSON string
create_a_book_payment_data_instance = CreateABookPaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateABookPaymentData.to_json())

# convert the object into a dict
create_a_book_payment_data_dict = create_a_book_payment_data_instance.to_dict()
# create an instance of CreateABookPaymentData from a dict
create_a_book_payment_data_from_dict = CreateABookPaymentData.from_dict(create_a_book_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


