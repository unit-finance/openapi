package com.unit.finance.sdk.it;

import com.unit.finance.sdk.model.AddAccountOwnersRequestData;
import com.unit.finance.sdk.model.AddAccountOwnersRequestDataAttributes;
import com.unit.finance.sdk.model.AddAccountOwnersRequest;
import com.unit.finance.sdk.model.CloseDepositAccountData;
import com.unit.finance.sdk.model.CloseDepositAccountDataAttributes;
import com.unit.finance.sdk.model.CloseDepositAccountRequest;
import com.unit.finance.sdk.model.CreateAccountHoldData;
import com.unit.finance.sdk.model.CreateAccountHoldDataAttributes;
import com.unit.finance.sdk.model.CreateAccountHoldRequest;
import com.unit.finance.sdk.model.CreateDepositAccountData;
import com.unit.finance.sdk.model.CreateDepositAccountDataAttributes;
import com.unit.finance.sdk.model.CreateDepositAccountDataRelationships;
import com.unit.finance.sdk.model.CreateDepositAccountRequest;
import com.unit.finance.sdk.model.CreateFeeData;
import com.unit.finance.sdk.model.CreateFeeDataAttributes;
import com.unit.finance.sdk.model.CreateFeeDataRelationships;
import com.unit.finance.sdk.model.CreateFeeRequest;
import com.unit.finance.sdk.model.FreezeDepositAccountData;
import com.unit.finance.sdk.model.FreezeDepositAccountDataAttributes;
import com.unit.finance.sdk.model.FreezeDepositAccountRequest;
import com.unit.finance.sdk.model.ReleaseAccountHoldData;
import com.unit.finance.sdk.model.ReleaseAccountHoldDataAttributes;
import com.unit.finance.sdk.model.ReleaseAccountHoldRequest;
import com.unit.finance.sdk.model.RemoveAccountOwnersRequestData;
import com.unit.finance.sdk.model.RemoveAccountOwnersRequestDataAttributes;
import com.unit.finance.sdk.model.RemoveAccountOwnersRequest;
import com.unit.finance.sdk.model.ReverseFeeData;
import com.unit.finance.sdk.model.ReverseFeeDataAttributes;
import com.unit.finance.sdk.model.ReverseFeeDataRelationships;
import com.unit.finance.sdk.model.ReverseFeeRequest;
import com.unit.finance.sdk.model.UpdateDepositAccountData;
import com.unit.finance.sdk.model.UpdateDepositAccountDataAttributes;
import com.unit.finance.sdk.model.UpdateDepositAccountRequest;
import com.unit.finance.sdk.model.VerifyAccountData;
import com.unit.finance.sdk.model.VerifyAccountDataAttributes;
import com.unit.finance.sdk.model.VerifyAccountRequest;
import com.unit.finance.sdk.model.AddressType;
import com.unit.finance.sdk.model.AnnualIncomeType;
import com.unit.finance.sdk.model.BeneficialOwnerRequestType;
import com.unit.finance.sdk.model.BusinessAnnualRevenueType;
import com.unit.finance.sdk.model.BusinessContactType;
import com.unit.finance.sdk.model.BusinessNumberOfEmployeesType;
import com.unit.finance.sdk.model.BusinessVerticalType;
import com.unit.finance.sdk.model.CashFlowType;
import com.unit.finance.sdk.model.CancelApplicationData;
import com.unit.finance.sdk.model.CancelApplicationDataAttributes;
import com.unit.finance.sdk.model.CancelApplicationRequest;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddressData;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddressDataAttributes;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddressRequest;
import com.unit.finance.sdk.model.CreateBusinessApplicationData;
import com.unit.finance.sdk.model.CreateBusinessApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateBusinessApplicationRequest;
import com.unit.finance.sdk.model.CreateIndividualApplicationData;
import com.unit.finance.sdk.model.CreateIndividualApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateIndividualApplicationRequest;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationData;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationRequest;
import com.unit.finance.sdk.model.FullNameType;
import com.unit.finance.sdk.model.OccupationType;
import com.unit.finance.sdk.model.OfficerRequestType;
import com.unit.finance.sdk.model.PhoneType;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ResourceIdentifier;
import com.unit.finance.sdk.model.SoleProprietorAnnualRevenueType;
import com.unit.finance.sdk.model.SoleProprietorNumberOfEmployeesType;
import com.unit.finance.sdk.model.SourceOfIncomeType;
import com.unit.finance.sdk.model.UpdateApplicationRequest;
import com.unit.finance.sdk.model.UpdateBusinessApplicationData;
import com.unit.finance.sdk.model.UpdateBusinessApplicationDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessApplicationRequest;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerData;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerDataRelationships;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Request-body builders, mirroring the Node {@code tests/helpers/fixtures.ts}.
 *
 * <p>Nested JSON:API attribute objects (address, phone, fullName, contact,
 * officer, beneficialOwners) are typed model classes because the write schemas
 * reference the shared component types. Only free-form {@code tags} remain a
 * {@code Map<String, Object>}.
 */
final class Fixtures {

  private static final String RUN = ApiSupport.TEST_RUN_ID;

  private Fixtures() {}

  static Map<String, Object> map(Object... keyValues) {
    LinkedHashMap<String, Object> out = new LinkedHashMap<>();
    for (int i = 0; i < keyValues.length; i += 2) {
      out.put((String) keyValues[i], keyValues[i + 1]);
    }
    return out;
  }

  static AddressType usAddress() {
    return new AddressType()
        .street("20 Ingram St")
        .city("Forest Hills")
        .state("NY")
        .postalCode("11375")
        .country("US");
  }

  static PhoneType usPhone() {
    return new PhoneType().countryCode("1").number("5555555555");
  }

  static FullNameType fullName() {
    return new FullNameType().first("Peter").last("Parker");
  }

  static Map<String, Object> baseTags() {
    return map("testRun", RUN);
  }

  static BusinessContactType businessContact() {
    return new BusinessContactType()
        .fullName(fullName())
        .email("peter+" + RUN + "@oscorp.com")
        .phone(usPhone());
  }

  static OfficerRequestType officer() {
    return new OfficerRequestType()
        .fullName(fullName())
        .dateOfBirth("2001-08-15")
        .title("CEO")
        .ssn("721074426")
        .email("peter+" + RUN + "@oscorp.com")
        .phone(usPhone())
        .address(usAddress());
  }

  static List<BeneficialOwnerRequestType> beneficialOwners() {
    List<BeneficialOwnerRequestType> owners = new ArrayList<>();
    owners.add(
        new BeneficialOwnerRequestType()
            .fullName(new FullNameType().first("Mary Jane").last("Watson"))
            .dateOfBirth("2001-08-15")
            .ssn("574567625")
            .email("mj+" + RUN + "@oscorp.com")
            .phone(usPhone())
            .address(usAddress())
            .percentage(60));
    return owners;
  }

  static CreateBusinessApplicationRequest businessApplicationRequest() {
    CreateBusinessApplicationDataAttributes attributes =
        new CreateBusinessApplicationDataAttributes()
            .name("Pied Piper " + RUN)
            .address(usAddress())
            .phone(usPhone())
            .stateOfIncorporation("DE")
            .ein("123456789")
            .entityType("Corporation")
            .yearOfIncorporation("2020")
            .countriesOfOperation(Arrays.asList("US"))
            .businessVertical(BusinessVerticalType.TECHNOLOGY_MEDIA_OR_TELECOM)
            .website("https://www.piedpiper.com")
            .contact(businessContact())
            .officer(officer())
            .beneficialOwners(beneficialOwners())
            .annualRevenue(BusinessAnnualRevenueType.BETWEEN500K_AND1M)
            .numberOfEmployees(BusinessNumberOfEmployeesType.BETWEEN50_AND100)
            .cashFlow(CashFlowType.PREDICTABLE)
            .tags(baseTags());
    CreateBusinessApplicationData data =
        new CreateBusinessApplicationData()
            .type(CreateBusinessApplicationData.TypeEnum.BUSINESS_APPLICATION)
            .attributes(attributes);
    return new CreateBusinessApplicationRequest().data(data);
  }

  static CreateIndividualApplicationRequest individualApplicationRequest() {
    CreateIndividualApplicationDataAttributes attributes =
        new CreateIndividualApplicationDataAttributes()
            .ssn("721074426")
            .fullName(fullName())
            .dateOfBirth("2001-08-15")
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .occupation(OccupationType.ARCHITECT_OR_ENGINEER)
            .annualIncome(AnnualIncomeType.BETWEEN50K_AND100K)
            .sourceOfIncome(SourceOfIncomeType.EMPLOYMENT_OR_PAYROLL_INCOME)
            .tags(baseTags());
    CreateIndividualApplicationData data =
        new CreateIndividualApplicationData()
            .type(CreateIndividualApplicationData.TypeEnum.INDIVIDUAL_APPLICATION)
            .attributes(attributes);
    return new CreateIndividualApplicationRequest().data(data);
  }

  /**
   * Individual application that the sandbox lands in {@code AwaitingDocuments}
   * (applicant SSN {@code 000000003}), a non-terminal state that can be
   * canceled. Business applications auto-approve in the sandbox even with a
   * magic officer SSN, so the cancel flow exercises an individual applicant.
   */
  static CreateIndividualApplicationRequest cancelableIndividualApplicationRequest() {
    CreateIndividualApplicationRequest request = individualApplicationRequest();
    request.getData().getAttributes().setSsn("000000003");
    return request;
  }

  static CreateSoleProprietorApplicationRequest soleProprietorApplicationRequest() {
    CreateSoleProprietorApplicationDataAttributes attributes =
        new CreateSoleProprietorApplicationDataAttributes()
            .ssn("721074426")
            .fullName(fullName())
            .dateOfBirth("2001-08-15")
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .soleProprietorship(true)
            .ein("123456789")
            .dba("Pied Piper SP " + RUN)
            .businessVertical(BusinessVerticalType.TECHNOLOGY_MEDIA_OR_TELECOM)
            .annualRevenue(SoleProprietorAnnualRevenueType.BETWEEN100K_AND200K)
            .numberOfEmployees(SoleProprietorNumberOfEmployeesType.BETWEEN2_AND5)
            .website("https://www.piedpiper.com")
            .tags(baseTags());
    CreateSoleProprietorApplicationData data =
        new CreateSoleProprietorApplicationData()
            .type(CreateSoleProprietorApplicationData.TypeEnum.INDIVIDUAL_APPLICATION)
            .attributes(attributes);
    return new CreateSoleProprietorApplicationRequest().data(data);
  }

  static UpdateApplicationRequest updateBusinessApplicationRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateBusinessApplicationDataAttributes attributes =
        new UpdateBusinessApplicationDataAttributes().tags(tags);
    UpdateBusinessApplicationData data =
        new UpdateBusinessApplicationData()
            .type(UpdateBusinessApplicationData.TypeEnum.BUSINESS_APPLICATION)
            .attributes(attributes);
    return new UpdateApplicationRequest(new UpdateBusinessApplicationRequest().data(data));
  }

  static UpdateBusinessBeneficialOwnerRequest updateBusinessBeneficialOwnerRequest(
      String applicationId) {
    UpdateBusinessBeneficialOwnerDataAttributes attributes =
        new UpdateBusinessBeneficialOwnerDataAttributes().occupation(OccupationType.ARCHITECT_OR_ENGINEER);
    UpdateBusinessBeneficialOwnerDataRelationships relationships =
        new UpdateBusinessBeneficialOwnerDataRelationships()
            .application(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier()
                                .type("businessApplication")
                                .id(applicationId))));
    UpdateBusinessBeneficialOwnerData data =
        new UpdateBusinessBeneficialOwnerData()
            .type(UpdateBusinessBeneficialOwnerData.TypeEnum.BENEFICIAL_OWNER)
            .attributes(attributes)
            .relationships(relationships);
    return new UpdateBusinessBeneficialOwnerRequest().data(data);
  }

  static CancelApplicationRequest cancelApplicationRequest() {
    CancelApplicationDataAttributes attributes =
        new CancelApplicationDataAttributes().reason("By user request via SDK integration test");
    CancelApplicationData data =
        new CancelApplicationData()
            .type(CancelApplicationData.TypeEnum.APPLICATION_CANCEL)
            .attributes(attributes);
    return new CancelApplicationRequest().data(data);
  }

  static CheckRegisteredAgentAddressRequest checkRegisteredAgentAddressRequest() {
    CheckRegisteredAgentAddressDataAttributes attributes =
        new CheckRegisteredAgentAddressDataAttributes().address(usAddress());
    CheckRegisteredAgentAddressData data =
        new CheckRegisteredAgentAddressData()
            .type(CheckRegisteredAgentAddressData.TypeEnum.CHECK_REGISTERED_AGENT_ADDRESS)
            .attributes(attributes);
    return new CheckRegisteredAgentAddressRequest().data(data);
  }

  static CreateDepositAccountRequest createDepositAccountRequest(String customerId) {
    CreateDepositAccountDataAttributes attributes =
        new CreateDepositAccountDataAttributes().depositProduct("checking").tags(baseTags());
    CreateDepositAccountDataRelationships relationships =
        new CreateDepositAccountDataRelationships()
            .customer(
                new Relationship()
                    .data(new RelationshipData(new ResourceIdentifier().type("customer").id(customerId))));
    CreateDepositAccountData data =
        new CreateDepositAccountData()
            .type(CreateDepositAccountData.TypeEnum.DEPOSIT_ACCOUNT)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateDepositAccountRequest().data(data);
  }

  static UpdateDepositAccountRequest updateDepositAccountRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateDepositAccountDataAttributes attributes =
        new UpdateDepositAccountDataAttributes().tags(tags);
    UpdateDepositAccountData data =
        new UpdateDepositAccountData()
            .type(UpdateDepositAccountData.TypeEnum.DEPOSIT_ACCOUNT)
            .attributes(attributes);
    return new UpdateDepositAccountRequest().data(data);
  }

  static com.unit.finance.sdk.model.UpdateAccountRequest updateAccountRequest() {
    return new com.unit.finance.sdk.model.UpdateAccountRequest(updateDepositAccountRequest());
  }

  static com.unit.finance.sdk.model.CloseAccountRequest closeAccountRequest() {
    return new com.unit.finance.sdk.model.CloseAccountRequest(closeDepositAccountRequest());
  }

  static com.unit.finance.sdk.model.FreezeAccountRequest freezeAccountRequest() {
    return new com.unit.finance.sdk.model.FreezeAccountRequest(freezeDepositAccountRequest());
  }

  static com.unit.finance.sdk.model.CreateAccountRequest createAccountRequest(String customerId) {
    return new com.unit.finance.sdk.model.CreateAccountRequest(
        createDepositAccountRequest(customerId));
  }

  static VerifyAccountRequest verifyAccountRequest(String routingNumber, String accountNumber) {
    VerifyAccountDataAttributes attributes =
        new VerifyAccountDataAttributes().routingNumber(routingNumber).accountNumber(accountNumber);
    VerifyAccountData data =
        new VerifyAccountData()
            .type(VerifyAccountData.TypeEnum.ACCOUNT_VERIFY)
            .attributes(attributes);
    return new VerifyAccountRequest().data(data);
  }

  static CloseDepositAccountRequest closeDepositAccountRequest() {
    CloseDepositAccountDataAttributes attributes =
        new CloseDepositAccountDataAttributes().reason("ByCustomer");
    CloseDepositAccountData data =
        new CloseDepositAccountData()
            .type(CloseDepositAccountData.TypeEnum.DEPOSIT_ACCOUNT_CLOSE)
            .attributes(attributes);
    return new CloseDepositAccountRequest().data(data);
  }

  static FreezeDepositAccountRequest freezeDepositAccountRequest() {
    FreezeDepositAccountDataAttributes attributes =
        new FreezeDepositAccountDataAttributes()
            .reason("Other")
            .reasonText("SDK integration test freeze");
    FreezeDepositAccountData data =
        new FreezeDepositAccountData()
            .type(FreezeDepositAccountData.TypeEnum.ACCOUNT_FREEZE)
            .attributes(attributes);
    return new FreezeDepositAccountRequest().data(data);
  }

  static CreateFeeRequest createFeeRequest(String accountId) {
    CreateFeeDataAttributes attributes =
        new CreateFeeDataAttributes()
            .amount(100)
            .description("SDK integration test fee")
            .tags(baseTags());
    CreateFeeDataRelationships relationships =
        new CreateFeeDataRelationships()
            .account(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier().type("depositAccount").id(accountId))));
    CreateFeeData data =
        new CreateFeeData()
            .type(CreateFeeData.TypeEnum.FEE)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateFeeRequest().data(data);
  }

  static ReverseFeeRequest reverseFeeRequest(String accountId, String transactionId) {
    ReverseFeeDataAttributes attributes =
        new ReverseFeeDataAttributes()
            .description("SDK integration test fee reversal")
            .tags(baseTags());
    ReverseFeeDataRelationships relationships =
        new ReverseFeeDataRelationships()
            .account(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier().type("depositAccount").id(accountId))))
            .transaction(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier().type("transaction").id(transactionId))));
    ReverseFeeData data =
        new ReverseFeeData()
            .type(ReverseFeeData.TypeEnum.FEE_REVERSAL)
            .attributes(attributes)
            .relationships(relationships);
    return new ReverseFeeRequest().data(data);
  }

  static CreateAccountHoldRequest createAccountHoldRequest(String accountId) {
    CreateAccountHoldDataAttributes attributes =
        new CreateAccountHoldDataAttributes()
            .amount(100)
            .description("SDK integration test hold");
    CreateFeeDataRelationships relationships =
        new CreateFeeDataRelationships()
            .account(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier().type("depositAccount").id(accountId))));
    CreateAccountHoldData data =
        new CreateAccountHoldData()
            .type(CreateAccountHoldData.TypeEnum.CREATE_ACCOUNT_HOLD_JSON)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateAccountHoldRequest().data(data);
  }

  static ReleaseAccountHoldRequest releaseAccountHoldRequest() {
    ReleaseAccountHoldDataAttributes attributes =
        new ReleaseAccountHoldDataAttributes().amount(100);
    ReleaseAccountHoldData data =
        new ReleaseAccountHoldData()
            .type(ReleaseAccountHoldData.TypeEnum.ACCOUNT_HOLD)
            .attributes(attributes);
    return new ReleaseAccountHoldRequest().data(data);
  }

  static AddAccountOwnersRequest addAccountOwnersRequest(String customerId) {
    List<ResourceIdentifier> owners = new ArrayList<>();
    owners.add(new ResourceIdentifier().type("customer").id(customerId));
    AddAccountOwnersRequestDataAttributes attributes =
        new AddAccountOwnersRequestDataAttributes().data(owners);
    AddAccountOwnersRequestData data = new AddAccountOwnersRequestData().attributes(attributes);
    return new AddAccountOwnersRequest().data(data);
  }

  static RemoveAccountOwnersRequest removeAccountOwnersRequest(String customerId) {
    List<ResourceIdentifier> owners = new ArrayList<>();
    owners.add(new ResourceIdentifier().type("customer").id(customerId));
    RemoveAccountOwnersRequestDataAttributes attributes =
        new RemoveAccountOwnersRequestDataAttributes().data(owners);
    RemoveAccountOwnersRequestData data =
        new RemoveAccountOwnersRequestData().attributes(attributes);
    return new RemoveAccountOwnersRequest().data(data);
  }
}
