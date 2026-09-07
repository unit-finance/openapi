# CreateIndividualDebitCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_address** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, the individual address is used. | [optional] 
**design** | **str** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. | [optional] 
**additional_embossed_text** | **str** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**limits** | **Dict[str, object]** | See Limits (cents). | [optional] 
**print_only_business_name** | **bool** | Optional, default is false. Print the business name on the card instead of the card holder&#39;s name. Available only for Sole Proprietorship typed customers that have a DBA property. | [optional] 
**expiry_date** | **str** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_individual_debit_card_data_attributes import CreateIndividualDebitCardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualDebitCardDataAttributes from a JSON string
create_individual_debit_card_data_attributes_instance = CreateIndividualDebitCardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualDebitCardDataAttributes.to_json())

# convert the object into a dict
create_individual_debit_card_data_attributes_dict = create_individual_debit_card_data_attributes_instance.to_dict()
# create an instance of CreateIndividualDebitCardDataAttributes from a dict
create_individual_debit_card_data_attributes_from_dict = CreateIndividualDebitCardDataAttributes.from_dict(create_individual_debit_card_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


