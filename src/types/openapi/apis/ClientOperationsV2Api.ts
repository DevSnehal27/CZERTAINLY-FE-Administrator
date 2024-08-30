// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    AuthenticationServiceExceptionDto,
    BaseAttributeDto,
    ClientCertificateDataResponseDto,
    ClientCertificateRekeyRequestDto,
    ClientCertificateRenewRequestDto,
    ClientCertificateRevocationDto,
    ClientCertificateSignRequestDto,
    ErrorMessageDto,
    RequestAttributeDto,
} from '../models';

export interface IssueCertificateRequest {
    authorityUuid: string;
    raProfileUuid: string;
    clientCertificateSignRequestDto: ClientCertificateSignRequestDto;
}

export interface IssueNewCertificateRequest {
    authorityUuid: string;
    raProfileUuid: string;
    certificateUuid: string;
}

export interface ListIssueCertificateAttributesRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface ListRevokeCertificateAttributesRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface RekeyCertificateRequest {
    authorityUuid: string;
    raProfileUuid: string;
    certificateUuid: string;
    clientCertificateRekeyRequestDto: ClientCertificateRekeyRequestDto;
}

export interface RenewCertificateRequest {
    authorityUuid: string;
    raProfileUuid: string;
    certificateUuid: string;
    clientCertificateRenewRequestDto: ClientCertificateRenewRequestDto;
}

export interface RevokeCertificateRequest {
    authorityUuid: string;
    raProfileUuid: string;
    certificateUuid: string;
    clientCertificateRevocationDto: ClientCertificateRevocationDto;
}

export interface ValidateIssueCertificateAttributesRequest {
    authorityUuid: string;
    raProfileUuid: string;
    requestAttributeDto: Array<RequestAttributeDto>;
}

export interface ValidateRevokeCertificateAttributesRequest {
    authorityUuid: string;
    raProfileUuid: string;
    requestAttributeDto: Array<RequestAttributeDto>;
}

/**
 * no description
 */
export class ClientOperationsV2Api extends BaseAPI {

    /**
     * Issue Certificate
     */
    issueCertificate({ authorityUuid, raProfileUuid, clientCertificateSignRequestDto }: IssueCertificateRequest): Observable<ClientCertificateDataResponseDto>
    issueCertificate({ authorityUuid, raProfileUuid, clientCertificateSignRequestDto }: IssueCertificateRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientCertificateDataResponseDto>>
    issueCertificate({ authorityUuid, raProfileUuid, clientCertificateSignRequestDto }: IssueCertificateRequest, opts?: OperationOpts): Observable<ClientCertificateDataResponseDto | AjaxResponse<ClientCertificateDataResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'issueCertificate');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'issueCertificate');
        throwIfNullOrUndefined(clientCertificateSignRequestDto, 'clientCertificateSignRequestDto', 'issueCertificate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ClientCertificateDataResponseDto>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/certificates'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'POST',
            headers,
            body: clientCertificateSignRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Issue existing certificate with status New
     */
    issueNewCertificate({ authorityUuid, raProfileUuid, certificateUuid }: IssueNewCertificateRequest): Observable<ClientCertificateDataResponseDto>
    issueNewCertificate({ authorityUuid, raProfileUuid, certificateUuid }: IssueNewCertificateRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientCertificateDataResponseDto>>
    issueNewCertificate({ authorityUuid, raProfileUuid, certificateUuid }: IssueNewCertificateRequest, opts?: OperationOpts): Observable<ClientCertificateDataResponseDto | AjaxResponse<ClientCertificateDataResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'issueNewCertificate');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'issueNewCertificate');
        throwIfNullOrUndefined(certificateUuid, 'certificateUuid', 'issueNewCertificate');

        return this.request<ClientCertificateDataResponseDto>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/certificates/{certificateUuid}/issue'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{certificateUuid}', encodeURI(certificateUuid)),
            method: 'POST',
        }, opts?.responseOpts);
    };

    /**
     * Get issue Certificate Attributes
     */
    listIssueCertificateAttributes({ authorityUuid, raProfileUuid }: ListIssueCertificateAttributesRequest): Observable<Array<BaseAttributeDto>>
    listIssueCertificateAttributes({ authorityUuid, raProfileUuid }: ListIssueCertificateAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listIssueCertificateAttributes({ authorityUuid, raProfileUuid }: ListIssueCertificateAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'listIssueCertificateAttributes');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'listIssueCertificateAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/issue'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get revocation Attributes
     */
    listRevokeCertificateAttributes({ authorityUuid, raProfileUuid }: ListRevokeCertificateAttributesRequest): Observable<Array<BaseAttributeDto>>
    listRevokeCertificateAttributes({ authorityUuid, raProfileUuid }: ListRevokeCertificateAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listRevokeCertificateAttributes({ authorityUuid, raProfileUuid }: ListRevokeCertificateAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'listRevokeCertificateAttributes');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'listRevokeCertificateAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/revoke'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Rekey Certificate
     */
    rekeyCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRekeyRequestDto }: RekeyCertificateRequest): Observable<ClientCertificateDataResponseDto>
    rekeyCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRekeyRequestDto }: RekeyCertificateRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientCertificateDataResponseDto>>
    rekeyCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRekeyRequestDto }: RekeyCertificateRequest, opts?: OperationOpts): Observable<ClientCertificateDataResponseDto | AjaxResponse<ClientCertificateDataResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'rekeyCertificate');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'rekeyCertificate');
        throwIfNullOrUndefined(certificateUuid, 'certificateUuid', 'rekeyCertificate');
        throwIfNullOrUndefined(clientCertificateRekeyRequestDto, 'clientCertificateRekeyRequestDto', 'rekeyCertificate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ClientCertificateDataResponseDto>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/certificates/{certificateUuid}/rekey'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{certificateUuid}', encodeURI(certificateUuid)),
            method: 'POST',
            headers,
            body: clientCertificateRekeyRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Renew Certificate
     */
    renewCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRenewRequestDto }: RenewCertificateRequest): Observable<ClientCertificateDataResponseDto>
    renewCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRenewRequestDto }: RenewCertificateRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientCertificateDataResponseDto>>
    renewCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRenewRequestDto }: RenewCertificateRequest, opts?: OperationOpts): Observable<ClientCertificateDataResponseDto | AjaxResponse<ClientCertificateDataResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'renewCertificate');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'renewCertificate');
        throwIfNullOrUndefined(certificateUuid, 'certificateUuid', 'renewCertificate');
        throwIfNullOrUndefined(clientCertificateRenewRequestDto, 'clientCertificateRenewRequestDto', 'renewCertificate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ClientCertificateDataResponseDto>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/certificates/{certificateUuid}/renew'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{certificateUuid}', encodeURI(certificateUuid)),
            method: 'POST',
            headers,
            body: clientCertificateRenewRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Revoke Certificate
     */
    revokeCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRevocationDto }: RevokeCertificateRequest): Observable<void>
    revokeCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRevocationDto }: RevokeCertificateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    revokeCertificate({ authorityUuid, raProfileUuid, certificateUuid, clientCertificateRevocationDto }: RevokeCertificateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'revokeCertificate');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'revokeCertificate');
        throwIfNullOrUndefined(certificateUuid, 'certificateUuid', 'revokeCertificate');
        throwIfNullOrUndefined(clientCertificateRevocationDto, 'clientCertificateRevocationDto', 'revokeCertificate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/certificates/{certificateUuid}/revoke'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{certificateUuid}', encodeURI(certificateUuid)),
            method: 'POST',
            headers,
            body: clientCertificateRevocationDto,
        }, opts?.responseOpts);
    };

    /**
     * Validate issue Certificate Attributes
     */
    validateIssueCertificateAttributes({ authorityUuid, raProfileUuid, requestAttributeDto }: ValidateIssueCertificateAttributesRequest): Observable<void>
    validateIssueCertificateAttributes({ authorityUuid, raProfileUuid, requestAttributeDto }: ValidateIssueCertificateAttributesRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    validateIssueCertificateAttributes({ authorityUuid, raProfileUuid, requestAttributeDto }: ValidateIssueCertificateAttributesRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'validateIssueCertificateAttributes');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'validateIssueCertificateAttributes');
        throwIfNullOrUndefined(requestAttributeDto, 'requestAttributeDto', 'validateIssueCertificateAttributes');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/issue/validate'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'POST',
            headers,
            body: requestAttributeDto,
        }, opts?.responseOpts);
    };

    /**
     * Validate revocation Attributes
     */
    validateRevokeCertificateAttributes({ authorityUuid, raProfileUuid, requestAttributeDto }: ValidateRevokeCertificateAttributesRequest): Observable<void>
    validateRevokeCertificateAttributes({ authorityUuid, raProfileUuid, requestAttributeDto }: ValidateRevokeCertificateAttributesRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    validateRevokeCertificateAttributes({ authorityUuid, raProfileUuid, requestAttributeDto }: ValidateRevokeCertificateAttributesRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'validateRevokeCertificateAttributes');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'validateRevokeCertificateAttributes');
        throwIfNullOrUndefined(requestAttributeDto, 'requestAttributeDto', 'validateRevokeCertificateAttributes');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v2/operations/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/revoke/validate'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'POST',
            headers,
            body: requestAttributeDto,
        }, opts?.responseOpts);
    };

}
