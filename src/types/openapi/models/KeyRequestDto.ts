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

import type {
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface KeyRequestDto
 */
export interface KeyRequestDto {
    /**
     * Name of the Cryptographic Key
     * @type {string}
     * @memberof KeyRequestDto
     */
    name: string;
    /**
     * Description of the Cryptographic Key
     * @type {string}
     * @memberof KeyRequestDto
     */
    description: string;
    /**
     * UUIDs of the groups to associate with key
     * @type {Array<string>}
     * @memberof KeyRequestDto
     */
    groupUuids?: Array<string>;
    /**
     * List of Attributes to create a Key
     * @type {Array<RequestAttributeDto>}
     * @memberof KeyRequestDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * Custom Attributes for the key
     * @type {Array<RequestAttributeDto>}
     * @memberof KeyRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
    /**
     * Enabled status of created key. True = Enabled, False = Disabled
     * @type {boolean}
     * @memberof KeyRequestDto
     */
    enabled?: boolean;
}
