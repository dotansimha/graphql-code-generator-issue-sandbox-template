import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type Query = {
    __typename?: "Query";
    getDeployment?: Maybe<V1Deployment>;
};

export type QueryGetDeploymentArgs = {
    clusterId: Scalars["String"];
    namespace: Scalars["String"];
    name: Scalars["String"];
};

/** APIGroup contains the name, the supported versions, and the preferred version of a group. */
export type V1ApiGroup = {
    __typename?: "V1APIGroup";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** name is the name of the group. */
    name: Scalars["String"];
    /** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
    preferredVersion?: Maybe<V1GroupVersionForDiscovery>;
    /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
    serverAddressByClientCIDRs?: Maybe<
        Array<Maybe<V1ServerAddressByClientCidr>>
    >;
    /** versions are the versions supported in this group. */
    versions: Array<Maybe<V1GroupVersionForDiscovery>>;
};

/** APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export type V1ApiGroupList = {
    __typename?: "V1APIGroupList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** groups is a list of APIGroup. */
    groups: Array<Maybe<V1ApiGroup>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
};

/** APIResource specifies the name of a resource and whether it is namespaced. */
export type V1ApiResource = {
    __typename?: "V1APIResource";
    /** categories is a list of the grouped resources this resource belongs to (e.g. 'all') */
    categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale". */
    group?: Maybe<Scalars["String"]>;
    /** kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo') */
    kind: Scalars["String"];
    /** name is the plural name of the resource. */
    name: Scalars["String"];
    /** namespaced indicates if a resource is namespaced or not. */
    namespaced: Scalars["Boolean"];
    /** shortNames is a list of suggested short names of the resource. */
    shortNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface. */
    singularName: Scalars["String"];
    /** The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates. */
    storageVersionHash?: Maybe<Scalars["String"]>;
    /** verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) */
    verbs: Array<Maybe<Scalars["String"]>>;
    /** version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)". */
    version?: Maybe<Scalars["String"]>;
};

/** APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export type V1ApiResourceList = {
    __typename?: "V1APIResourceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** groupVersion is the group and version this APIResourceList is for. */
    groupVersion: Scalars["String"];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** resources contains the name of the resources and if they are namespaced. */
    resources: Array<Maybe<V1ApiResource>>;
};

/** APIService represents a server for a particular GroupVersion. Name must be "version.group". */
export type V1ApiService = {
    __typename?: "V1APIService";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
    spec?: Maybe<V1ApiServiceSpec>;
    /** APIServiceStatus contains derived information about an API server */
    status?: Maybe<V1ApiServiceStatus>;
};

/** APIServiceCondition describes the state of an APIService at a particular point */
export type V1ApiServiceCondition = {
    __typename?: "V1APIServiceCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** Unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status is the status of the condition. Can be True, False, Unknown. */
    status: Scalars["String"];
    /** Type is the type of the condition. */
    type: Scalars["String"];
};

/** APIServiceList is a list of APIService objects. */
export type V1ApiServiceList = {
    __typename?: "V1APIServiceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    items: Array<Maybe<V1ApiService>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
export type V1ApiServiceSpec = {
    __typename?: "V1APIServiceSpec";
    /** CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used. */
    caBundle?: Maybe<Scalars["String"]>;
    /** Group is the API group name this server hosts */
    group?: Maybe<Scalars["String"]>;
    /** GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s */
    groupPriorityMinimum: Scalars["Int"];
    /** InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead. */
    insecureSkipTLSVerify?: Maybe<Scalars["Boolean"]>;
    /** ServiceReference holds a reference to Service.legacy.k8s.io */
    service?: Maybe<V1ServiceReference>;
    /** Version is the API version this server hosts.  For example, "v1" */
    version?: Maybe<Scalars["String"]>;
    /** VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    versionPriority: Scalars["Int"];
};

/** APIServiceStatus contains derived information about an API server */
export type V1ApiServiceStatus = {
    __typename?: "V1APIServiceStatus";
    /** Current service state of apiService. */
    conditions?: Maybe<Array<Maybe<V1ApiServiceCondition>>>;
};

/** APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export type V1ApiVersions = {
    __typename?: "V1APIVersions";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
    serverAddressByClientCIDRs: Array<Maybe<V1ServerAddressByClientCidr>>;
    /** versions are the api versions that are available. */
    versions: Array<Maybe<Scalars["String"]>>;
};

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export type V1AwsElasticBlockStoreVolumeSource = {
    __typename?: "V1AWSElasticBlockStoreVolumeSource";
    /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
    fsType?: Maybe<Scalars["String"]>;
    /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
    partition?: Maybe<Scalars["Int"]>;
    /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
    volumeID: Scalars["String"];
};

/** Affinity is a group of affinity scheduling rules. */
export type V1Affinity = {
    __typename?: "V1Affinity";
    /** Node affinity is a group of node affinity scheduling rules. */
    nodeAffinity?: Maybe<V1NodeAffinity>;
    /** Pod affinity is a group of inter pod affinity scheduling rules. */
    podAffinity?: Maybe<V1PodAffinity>;
    /** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
    podAntiAffinity?: Maybe<V1PodAntiAffinity>;
};

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export type V1AggregationRule = {
    __typename?: "V1AggregationRule";
    /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
    clusterRoleSelectors?: Maybe<Array<Maybe<V1LabelSelector>>>;
};

/** AttachedVolume describes a volume attached to a node */
export type V1AttachedVolume = {
    __typename?: "V1AttachedVolume";
    /** DevicePath represents the device path where the volume should be available */
    devicePath: Scalars["String"];
    /** Name of the attached volume */
    name: Scalars["String"];
};

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export type V1AzureDiskVolumeSource = {
    __typename?: "V1AzureDiskVolumeSource";
    /** Host Caching mode: None, Read Only, Read Write. */
    cachingMode?: Maybe<Scalars["String"]>;
    /** The Name of the data disk in the blob storage */
    diskName: Scalars["String"];
    /** The URI the data disk in the blob storage */
    diskURI: Scalars["String"];
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
    kind?: Maybe<Scalars["String"]>;
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type V1AzureFilePersistentVolumeSource = {
    __typename?: "V1AzureFilePersistentVolumeSource";
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** the name of secret that contains Azure Storage Account Name and Key */
    secretName: Scalars["String"];
    /** the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod */
    secretNamespace?: Maybe<Scalars["String"]>;
    /** Share Name */
    shareName: Scalars["String"];
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type V1AzureFileVolumeSource = {
    __typename?: "V1AzureFileVolumeSource";
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** the name of secret that contains Azure Storage Account Name and Key */
    secretName: Scalars["String"];
    /** Share Name */
    shareName: Scalars["String"];
};

/** Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export type V1Binding = {
    __typename?: "V1Binding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    target: V1ObjectReference;
};

/** BoundObjectReference is a reference to an object that a token is bound to. */
export type V1BoundObjectReference = {
    __typename?: "V1BoundObjectReference";
    /** API version of the referent. */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind of the referent. Valid kinds are 'Pod' and 'Secret'. */
    kind?: Maybe<Scalars["String"]>;
    /** Name of the referent. */
    name?: Maybe<Scalars["String"]>;
    /** UID of the referent. */
    uid?: Maybe<Scalars["String"]>;
};

/** CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export type V1CsiDriver = {
    __typename?: "V1CSIDriver";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CSIDriverSpec is the specification of a CSIDriver. */
    spec: V1CsiDriverSpec;
};

/** CSIDriverList is a collection of CSIDriver objects. */
export type V1CsiDriverList = {
    __typename?: "V1CSIDriverList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of CSIDriver */
    items: Array<Maybe<V1CsiDriver>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CSIDriverSpec is the specification of a CSIDriver. */
export type V1CsiDriverSpec = {
    __typename?: "V1CSIDriverSpec";
    /**
     * attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the CSIDriverRegistry feature gate is enabled and the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called.
     *
     * This field is immutable.
     */
    attachRequired?: Maybe<Scalars["Boolean"]>;
    /**
     * Defines if the underlying volume supports changing ownership and permission of the volume before being mounted. Refer to the specific FSGroupPolicy values for additional details. This field is beta, and is only honored by servers that enable the CSIVolumeFSGroupPolicy feature gate.
     *
     * This field is immutable.
     *
     * Defaults to ReadWriteOnceWithFSType, which will examine each volume to determine if Kubernetes should modify ownership and permissions of the volume. With the default policy the defined fsGroup will only be applied if a fstype is defined and the volume's access mode contains ReadWriteOnce.
     */
    fsGroupPolicy?: Maybe<Scalars["String"]>;
    /**
     * If set to true, podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations. If set to false, pod information will not be passed on mount. Default is false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeConext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. "csi.storage.k8s.io/pod.name": pod.Name "csi.storage.k8s.io/pod.namespace": pod.Namespace "csi.storage.k8s.io/pod.uid": string(pod.UID) "csi.storage.k8s.io/ephemeral": "true" if the volume is an ephemeral inline volume
     *                                 defined by a CSIVolumeSource, otherwise "false"
     *
     * "csi.storage.k8s.io/ephemeral" is a new feature in Kubernetes 1.16. It is only required for drivers which support both the "Persistent" and "Ephemeral" VolumeLifecycleMode. Other drivers can leave pod info disabled and/or ignore this field. As Kubernetes 1.15 doesn't support this field, drivers can only support one mode when deployed on such a cluster and the deployment determines which mode that is, for example via a command line parameter of the driver.
     *
     * This field is immutable.
     */
    podInfoOnMount?: Maybe<Scalars["Boolean"]>;
    /**
     * RequiresRepublish indicates the CSI driver wants `NodePublishVolume` being periodically called to reflect any possible change in the mounted volume. This field defaults to false.
     *
     * Note: After a successful initial NodePublishVolume call, subsequent calls to NodePublishVolume should only update the contents of the volume. New mount points will not be seen by a running container.
     *
     * This is a beta feature and only available when the CSIServiceAccountToken feature is enabled.
     */
    requiresRepublish?: Maybe<Scalars["Boolean"]>;
    /**
     * If set to true, storageCapacity indicates that the CSI volume driver wants pod scheduling to consider the storage capacity that the driver deployment will report by creating CSIStorageCapacity objects with capacity information.
     *
     * The check can be enabled immediately when deploying a driver. In that case, provisioning new volumes with late binding will pause until the driver deployment has published some suitable CSIStorageCapacity object.
     *
     * Alternatively, the driver can be deployed with the field unset or false and it can be flipped later when storage capacity information has been published.
     *
     * This field is immutable.
     *
     * This is a beta field and only available when the CSIStorageCapacity feature is enabled. The default is false.
     */
    storageCapacity?: Maybe<Scalars["Boolean"]>;
    /**
     * TokenRequests indicates the CSI driver needs pods' service account tokens it is mounting volume for to do necessary authentication. Kubelet will pass the tokens in VolumeContext in the CSI NodePublishVolume calls. The CSI driver should parse and validate the following VolumeContext: "csi.storage.k8s.io/serviceAccount.tokens": {
     *   "<audience>": {
     *     "token": <token>,
     *     "expirationTimestamp": <expiration timestamp in RFC3339>,
     *   },
     *   ...
     * }
     *
     * Note: Audience in each TokenRequest should be different and at most one token is empty string. To receive a new token after expiry, RequiresRepublish can be used to trigger NodePublishVolume periodically.
     *
     * This is a beta feature and only available when the CSIServiceAccountToken feature is enabled.
     */
    tokenRequests?: Maybe<Array<Maybe<V1TokenRequest>>>;
    /**
     * volumeLifecycleModes defines what kind of volumes this CSI volume driver supports. The default if the list is empty is "Persistent", which is the usage defined by the CSI specification and implemented in Kubernetes via the usual PV/PVC mechanism. The other mode is "Ephemeral". In this mode, volumes are defined inline inside the pod spec with CSIVolumeSource and their lifecycle is tied to the lifecycle of that pod. A driver has to be aware of this because it is only going to get a NodePublishVolume call for such a volume. For more information about implementing this mode, see https://kubernetes-csi.github.io/docs/ephemeral-local-volumes.html A driver can support one or more of these modes and more modes may be added in the future. This field is beta.
     *
     * This field is immutable.
     */
    volumeLifecycleModes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export type V1CsiNode = {
    __typename?: "V1CSINode";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
    spec: V1CsiNodeSpec;
};

/** CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export type V1CsiNodeDriver = {
    __typename?: "V1CSINodeDriver";
    /** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
    allocatable?: Maybe<V1VolumeNodeResources>;
    /** This is the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver. */
    name: Scalars["String"];
    /** nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required. */
    nodeID: Scalars["String"];
    /** topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology. */
    topologyKeys?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** CSINodeList is a collection of CSINode objects. */
export type V1CsiNodeList = {
    __typename?: "V1CSINodeList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of CSINode */
    items: Array<Maybe<V1CsiNode>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export type V1CsiNodeSpec = {
    __typename?: "V1CSINodeSpec";
    /** drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty. */
    drivers: Array<Maybe<V1CsiNodeDriver>>;
};

/** Represents storage that is managed by an external CSI volume driver (Beta feature) */
export type V1CsiPersistentVolumeSource = {
    __typename?: "V1CSIPersistentVolumeSource";
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    controllerExpandSecretRef?: Maybe<V1SecretReference>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    controllerPublishSecretRef?: Maybe<V1SecretReference>;
    /** Driver is the name of the driver to use for this volume. Required. */
    driver: Scalars["String"];
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". */
    fsType?: Maybe<Scalars["String"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    nodePublishSecretRef?: Maybe<V1SecretReference>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    nodeStageSecretRef?: Maybe<V1SecretReference>;
    /** Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write). */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Attributes of the volume to publish. */
    volumeAttributes?: Maybe<Scalars["JSON"]>;
    /** VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required. */
    volumeHandle: Scalars["String"];
};

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export type V1CsiVolumeSource = {
    __typename?: "V1CSIVolumeSource";
    /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
    driver: Scalars["String"];
    /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
    fsType?: Maybe<Scalars["String"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    nodePublishSecretRef?: Maybe<V1LocalObjectReference>;
    /** Specifies a read-only configuration for the volume. Defaults to false (read/write). */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
    volumeAttributes?: Maybe<Scalars["JSON"]>;
};

/** Adds and removes POSIX capabilities from running containers. */
export type V1Capabilities = {
    __typename?: "V1Capabilities";
    /** Added capabilities */
    add?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Removed capabilities */
    drop?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type V1CephFsPersistentVolumeSource = {
    __typename?: "V1CephFSPersistentVolumeSource";
    /** Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    monitors: Array<Maybe<Scalars["String"]>>;
    /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
    path?: Maybe<Scalars["String"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    secretFile?: Maybe<Scalars["String"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    secretRef?: Maybe<V1SecretReference>;
    /** Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    user?: Maybe<Scalars["String"]>;
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type V1CephFsVolumeSource = {
    __typename?: "V1CephFSVolumeSource";
    /** Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    monitors: Array<Maybe<Scalars["String"]>>;
    /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
    path?: Maybe<Scalars["String"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    secretFile?: Maybe<Scalars["String"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef?: Maybe<V1LocalObjectReference>;
    /** Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
    user?: Maybe<Scalars["String"]>;
};

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 *
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 *
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export type V1CertificateSigningRequest = {
    __typename?: "V1CertificateSigningRequest";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CertificateSigningRequestSpec contains the certificate request. */
    spec: V1CertificateSigningRequestSpec;
    /** CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
    status?: Maybe<V1CertificateSigningRequestStatus>;
};

/** CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object */
export type V1CertificateSigningRequestCondition = {
    __typename?: "V1CertificateSigningRequestCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastUpdateTime?: Maybe<Scalars["String"]>;
    /** message contains a human readable message with details about the request state */
    message?: Maybe<Scalars["String"]>;
    /** reason indicates a brief reason for the request state */
    reason?: Maybe<Scalars["String"]>;
    /** status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown". */
    status: Scalars["String"];
    /**
     * type of the condition. Known conditions are "Approved", "Denied", and "Failed".
     *
     * An "Approved" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.
     *
     * A "Denied" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.
     *
     * A "Failed" condition is added via the /status subresource, indicating the signer failed to issue the certificate.
     *
     * Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.
     *
     * Only one condition of a given type is allowed.
     */
    type: Scalars["String"];
};

/** CertificateSigningRequestList is a collection of CertificateSigningRequest objects */
export type V1CertificateSigningRequestList = {
    __typename?: "V1CertificateSigningRequestList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is a collection of CertificateSigningRequest objects */
    items: Array<Maybe<V1CertificateSigningRequest>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CertificateSigningRequestSpec contains the certificate request. */
export type V1CertificateSigningRequestSpec = {
    __typename?: "V1CertificateSigningRequestSpec";
    /** extra contains extra attributes of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable. */
    extra?: Maybe<Scalars["JSON"]>;
    /** groups contains group membership of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable. */
    groups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. When serialized as JSON or YAML, the data is additionally base64-encoded. */
    request: Scalars["String"];
    /**
     * signerName indicates the requested signer, and is a qualified name.
     *
     * List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.
     *
     * Well-known Kubernetes signers are:
     *  1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.
     *   Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager.
     *  2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.
     *   Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
     *  3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.
     *   Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
     *
     * More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers
     *
     * Custom signerNames can also be specified. The signer defines:
     *  1. Trust distribution: how trust (CA bundles) are distributed.
     *  2. Permitted subjects: and behavior when a disallowed subject is requested.
     *  3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested.
     *  4. Required, permitted, or forbidden key usages / extended key usages.
     *  5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin.
     *  6. Whether or not requests for CA certificates are allowed.
     */
    signerName: Scalars["String"];
    /** uid contains the uid of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable. */
    uid?: Maybe<Scalars["String"]>;
    /**
     * usages specifies a set of key usages requested in the issued certificate.
     *
     * Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".
     *
     * Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".
     *
     * Valid values are:
     *  "signing", "digital signature", "content commitment",
     *  "key encipherment", "key agreement", "data encipherment",
     *  "cert sign", "crl sign", "encipher only", "decipher only", "any",
     *  "server auth", "client auth",
     *  "code signing", "email protection", "s/mime",
     *  "ipsec end system", "ipsec tunnel", "ipsec user",
     *  "timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"
     */
    usages?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** username contains the name of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable. */
    username?: Maybe<Scalars["String"]>;
};

/** CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
export type V1CertificateSigningRequestStatus = {
    __typename?: "V1CertificateSigningRequestStatus";
    /**
     * certificate is populated with an issued certificate by the signer after an Approved condition is present. This field is set via the /status subresource. Once populated, this field is immutable.
     *
     * If the certificate signing request is denied, a condition of type "Denied" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type "Failed" is added and this field remains empty.
     *
     * Validation requirements:
     *  1. certificate must contain one or more PEM blocks.
     *  2. All PEM blocks must have the "CERTIFICATE" label, contain no headers, and the encoded data
     *   must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280.
     *  3. Non-PEM content may appear before or after the "CERTIFICATE" PEM blocks and is unvalidated,
     *   to allow for explanatory text as described in section 5.2 of RFC7468.
     *
     * If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.
     *
     * The certificate is encoded in PEM format.
     *
     * When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:
     *
     *     base64(
     *     -----BEGIN CERTIFICATE-----
     *     ...
     *     -----END CERTIFICATE-----
     *     )
     */
    certificate?: Maybe<Scalars["String"]>;
    /** conditions applied to the request. Known conditions are "Approved", "Denied", and "Failed". */
    conditions?: Maybe<Array<Maybe<V1CertificateSigningRequestCondition>>>;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type V1CinderPersistentVolumeSource = {
    __typename?: "V1CinderPersistentVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
    fsType?: Maybe<Scalars["String"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    secretRef?: Maybe<V1SecretReference>;
    /** volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
    volumeID: Scalars["String"];
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type V1CinderVolumeSource = {
    __typename?: "V1CinderVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
    fsType?: Maybe<Scalars["String"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef?: Maybe<V1LocalObjectReference>;
    /** volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
    volumeID: Scalars["String"];
};

/** ClientIPConfig represents the configurations of Client IP based session affinity. */
export type V1ClientIpConfig = {
    __typename?: "V1ClientIPConfig";
    /** timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours). */
    timeoutSeconds?: Maybe<Scalars["Int"]>;
};

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export type V1ClusterRole = {
    __typename?: "V1ClusterRole";
    /** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
    aggregationRule?: Maybe<V1AggregationRule>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Rules holds all the PolicyRules for this ClusterRole */
    rules?: Maybe<Array<Maybe<V1PolicyRule>>>;
};

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export type V1ClusterRoleBinding = {
    __typename?: "V1ClusterRoleBinding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RoleRef contains information that points to the role being used */
    roleRef: V1RoleRef;
    /** Subjects holds references to the objects the role applies to. */
    subjects?: Maybe<Array<Maybe<V1Subject>>>;
};

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export type V1ClusterRoleBindingList = {
    __typename?: "V1ClusterRoleBindingList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ClusterRoleBindings */
    items: Array<Maybe<V1ClusterRoleBinding>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ClusterRoleList is a collection of ClusterRoles */
export type V1ClusterRoleList = {
    __typename?: "V1ClusterRoleList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ClusterRoles */
    items: Array<Maybe<V1ClusterRole>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Information about the condition of a component. */
export type V1ComponentCondition = {
    __typename?: "V1ComponentCondition";
    /** Condition error code for a component. For example, a health check error code. */
    error?: Maybe<Scalars["String"]>;
    /** Message about the condition for a component. For example, information about a health check. */
    message?: Maybe<Scalars["String"]>;
    /** Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown". */
    status: Scalars["String"];
    /** Type of condition for a component. Valid value: "Healthy" */
    type: Scalars["String"];
};

/** ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+ */
export type V1ComponentStatus = {
    __typename?: "V1ComponentStatus";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of component conditions observed */
    conditions?: Maybe<Array<Maybe<V1ComponentCondition>>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
};

/** Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+ */
export type V1ComponentStatusList = {
    __typename?: "V1ComponentStatusList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of ComponentStatus objects. */
    items: Array<Maybe<V1ComponentStatus>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Condition contains details for one aspect of the current state of this API Resource. */
export type V1Condition = {
    __typename?: "V1Condition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime: Scalars["String"];
    /** message is a human readable message indicating details about the transition. This may be an empty string. */
    message: Scalars["String"];
    /** observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty. */
    reason: Scalars["String"];
    /** status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** type of condition in CamelCase or in foo.example.com/CamelCase. */
    type: Scalars["String"];
};

/** ConfigMap holds configuration data for pods to consume. */
export type V1ConfigMap = {
    __typename?: "V1ConfigMap";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. */
    binaryData?: Maybe<Scalars["JSON"]>;
    /** Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process. */
    data?: Maybe<Scalars["JSON"]>;
    /** Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil. */
    immutable?: Maybe<Scalars["Boolean"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
};

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export type V1ConfigMapEnvSource = {
    __typename?: "V1ConfigMapEnvSource";
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the ConfigMap must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/** Selects a key from a ConfigMap. */
export type V1ConfigMapKeySelector = {
    __typename?: "V1ConfigMapKeySelector";
    /** The key to select. */
    key: Scalars["String"];
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the ConfigMap or its key must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/** ConfigMapList is a resource containing a list of ConfigMap objects. */
export type V1ConfigMapList = {
    __typename?: "V1ConfigMapList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of ConfigMaps. */
    items: Array<Maybe<V1ConfigMap>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. */
export type V1ConfigMapNodeConfigSource = {
    __typename?: "V1ConfigMapNodeConfigSource";
    /** KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases. */
    kubeletConfigKey: Scalars["String"];
    /** Name is the metadata.name of the referenced ConfigMap. This field is required in all cases. */
    name: Scalars["String"];
    /** Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases. */
    namespace: Scalars["String"];
    /** ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. */
    resourceVersion?: Maybe<Scalars["String"]>;
    /** UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. */
    uid?: Maybe<Scalars["String"]>;
};

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export type V1ConfigMapProjection = {
    __typename?: "V1ConfigMapProjection";
    /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
    items?: Maybe<Array<Maybe<V1KeyToPath>>>;
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the ConfigMap or its keys must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export type V1ConfigMapVolumeSource = {
    __typename?: "V1ConfigMapVolumeSource";
    /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
    defaultMode?: Maybe<Scalars["Int"]>;
    /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
    items?: Maybe<Array<Maybe<V1KeyToPath>>>;
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the ConfigMap or its keys must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/** A single application container that you want to run within a pod. */
export type V1Container = {
    __typename?: "V1Container";
    /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
    args?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
    command?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** List of environment variables to set in the container. Cannot be updated. */
    env?: Maybe<Array<Maybe<V1EnvVar>>>;
    /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
    envFrom?: Maybe<Array<Maybe<V1EnvFromSource>>>;
    /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
    image?: Maybe<Scalars["String"]>;
    /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
    imagePullPolicy?: Maybe<Scalars["String"]>;
    /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
    lifecycle?: Maybe<V1Lifecycle>;
    /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    livenessProbe?: Maybe<V1Probe>;
    /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
    name: Scalars["String"];
    /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
    ports?: Maybe<Array<Maybe<V1ContainerPort>>>;
    /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    readinessProbe?: Maybe<V1Probe>;
    /** ResourceRequirements describes the compute resource requirements. */
    resources?: Maybe<V1ResourceRequirements>;
    /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
    securityContext?: Maybe<V1SecurityContext>;
    /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    startupProbe?: Maybe<V1Probe>;
    /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
    stdin?: Maybe<Scalars["Boolean"]>;
    /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
    stdinOnce?: Maybe<Scalars["Boolean"]>;
    /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
    terminationMessagePath?: Maybe<Scalars["String"]>;
    /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
    terminationMessagePolicy?: Maybe<Scalars["String"]>;
    /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
    tty?: Maybe<Scalars["Boolean"]>;
    /** volumeDevices is the list of block devices to be used by the container. */
    volumeDevices?: Maybe<Array<Maybe<V1VolumeDevice>>>;
    /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
    volumeMounts?: Maybe<Array<Maybe<V1VolumeMount>>>;
    /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
    workingDir?: Maybe<Scalars["String"]>;
};

/** Describe a container image */
export type V1ContainerImage = {
    __typename?: "V1ContainerImage";
    /** Names by which this image is known. e.g. ["k8s.gcr.io/hyperkube:v1.0.7", "dockerhub.io/google_containers/hyperkube:v1.0.7"] */
    names: Array<Maybe<Scalars["String"]>>;
    /** The size of the image in bytes. */
    sizeBytes?: Maybe<Scalars["Float"]>;
};

/** ContainerPort represents a network port in a single container. */
export type V1ContainerPort = {
    __typename?: "V1ContainerPort";
    /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
    containerPort: Scalars["Int"];
    /** What host IP to bind the external port to. */
    hostIP?: Maybe<Scalars["String"]>;
    /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
    hostPort?: Maybe<Scalars["Int"]>;
    /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
    name?: Maybe<Scalars["String"]>;
    /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
    protocol?: Maybe<Scalars["String"]>;
};

/** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export type V1ContainerState = {
    __typename?: "V1ContainerState";
    /** ContainerStateRunning is a running state of a container. */
    running?: Maybe<V1ContainerStateRunning>;
    /** ContainerStateTerminated is a terminated state of a container. */
    terminated?: Maybe<V1ContainerStateTerminated>;
    /** ContainerStateWaiting is a waiting state of a container. */
    waiting?: Maybe<V1ContainerStateWaiting>;
};

/** ContainerStateRunning is a running state of a container. */
export type V1ContainerStateRunning = {
    __typename?: "V1ContainerStateRunning";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    startedAt?: Maybe<Scalars["String"]>;
};

/** ContainerStateTerminated is a terminated state of a container. */
export type V1ContainerStateTerminated = {
    __typename?: "V1ContainerStateTerminated";
    /** Container's ID in the format 'docker://<container_id>' */
    containerID?: Maybe<Scalars["String"]>;
    /** Exit status from the last termination of the container */
    exitCode: Scalars["Int"];
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    finishedAt?: Maybe<Scalars["String"]>;
    /** Message regarding the last termination of the container */
    message?: Maybe<Scalars["String"]>;
    /** (brief) reason from the last termination of the container */
    reason?: Maybe<Scalars["String"]>;
    /** Signal from the last termination of the container */
    signal?: Maybe<Scalars["Int"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    startedAt?: Maybe<Scalars["String"]>;
};

/** ContainerStateWaiting is a waiting state of a container. */
export type V1ContainerStateWaiting = {
    __typename?: "V1ContainerStateWaiting";
    /** Message regarding why the container is not yet running. */
    message?: Maybe<Scalars["String"]>;
    /** (brief) reason the container is not yet running. */
    reason?: Maybe<Scalars["String"]>;
};

/** ContainerStatus contains details for the current status of this container. */
export type V1ContainerStatus = {
    __typename?: "V1ContainerStatus";
    /** Container's ID in the format 'docker://<container_id>'. */
    containerID?: Maybe<Scalars["String"]>;
    /** The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images */
    image: Scalars["String"];
    /** ImageID of the container's image. */
    imageID: Scalars["String"];
    /** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
    lastState?: Maybe<V1ContainerState>;
    /** This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated. */
    name: Scalars["String"];
    /** Specifies whether the container has passed its readiness probe. */
    ready: Scalars["Boolean"];
    /** The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC. */
    restartCount: Scalars["Int"];
    /** Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined. */
    started?: Maybe<Scalars["Boolean"]>;
    /** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
    state?: Maybe<V1ContainerState>;
};

/** ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export type V1ControllerRevision = {
    __typename?: "V1ControllerRevision";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /**
     * RawExtension is used to hold extensions in external versions.
     *
     * To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
     *
     * // Internal package: type MyAPIObject struct {
     * 	runtime.TypeMeta `json:",inline"`
     * 	MyPlugin runtime.Object `json:"myPlugin"`
     * } type PluginA struct {
     * 	AOption string `json:"aOption"`
     * }
     *
     * // External package: type MyAPIObject struct {
     * 	runtime.TypeMeta `json:",inline"`
     * 	MyPlugin runtime.RawExtension `json:"myPlugin"`
     * } type PluginA struct {
     * 	AOption string `json:"aOption"`
     * }
     *
     * // On the wire, the JSON will look something like this: {
     * 	"kind":"MyAPIObject",
     * 	"apiVersion":"v1",
     * 	"myPlugin": {
     * 		"kind":"PluginA",
     * 		"aOption":"foo",
     * 	},
     * }
     *
     * So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
     */
    data?: Maybe<Scalars["JSON"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Revision indicates the revision of the state represented by Data. */
    revision: Scalars["Float"];
};

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export type V1ControllerRevisionList = {
    __typename?: "V1ControllerRevisionList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of ControllerRevisions */
    items: Array<Maybe<V1ControllerRevision>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CronJob represents the configuration of a single cron job. */
export type V1CronJob = {
    __typename?: "V1CronJob";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CronJobSpec describes how the job execution will look like and when it will actually run. */
    spec?: Maybe<V1CronJobSpec>;
    /** CronJobStatus represents the current state of a cron job. */
    status?: Maybe<V1CronJobStatus>;
};

/** CronJobList is a collection of cron jobs. */
export type V1CronJobList = {
    __typename?: "V1CronJobList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of CronJobs. */
    items: Array<Maybe<V1CronJob>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export type V1CronJobSpec = {
    __typename?: "V1CronJobSpec";
    /** Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one */
    concurrencyPolicy?: Maybe<Scalars["String"]>;
    /** The number of failed finished jobs to retain. Value must be non-negative integer. Defaults to 1. */
    failedJobsHistoryLimit?: Maybe<Scalars["Int"]>;
    /** JobTemplateSpec describes the data a Job should have when created from a template */
    jobTemplate: V1JobTemplateSpec;
    /** The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron. */
    schedule: Scalars["String"];
    /** Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones. */
    startingDeadlineSeconds?: Maybe<Scalars["Float"]>;
    /** The number of successful finished jobs to retain. Value must be non-negative integer. Defaults to 3. */
    successfulJobsHistoryLimit?: Maybe<Scalars["Int"]>;
    /** This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false. */
    suspend?: Maybe<Scalars["Boolean"]>;
};

/** CronJobStatus represents the current state of a cron job. */
export type V1CronJobStatus = {
    __typename?: "V1CronJobStatus";
    /** A list of pointers to currently running jobs. */
    active?: Maybe<Array<Maybe<V1ObjectReference>>>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastScheduleTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastSuccessfulTime?: Maybe<Scalars["String"]>;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V1CrossVersionObjectReference = {
    __typename?: "V1CrossVersionObjectReference";
    /** API version of the referent */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
    kind: Scalars["String"];
    /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
    name: Scalars["String"];
};

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export type V1CustomResourceColumnDefinition = {
    __typename?: "V1CustomResourceColumnDefinition";
    /** description is a human readable description of this column. */
    description?: Maybe<Scalars["String"]>;
    /** format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details. */
    format?: Maybe<Scalars["String"]>;
    /** jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column. */
    jsonPath: Scalars["String"];
    /** name is a human readable name for the column. */
    name: Scalars["String"];
    /** priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0. */
    priority?: Maybe<Scalars["Int"]>;
    /** type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details. */
    type: Scalars["String"];
};

/** CustomResourceConversion describes how to convert different versions of a CR. */
export type V1CustomResourceConversion = {
    __typename?: "V1CustomResourceConversion";
    /**
     * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
     *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
     */
    strategy: Scalars["String"];
    /** WebhookConversion describes how to call a conversion webhook */
    webhook?: Maybe<V1WebhookConversion>;
};

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export type V1CustomResourceDefinition = {
    __typename?: "V1CustomResourceDefinition";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
    spec: V1CustomResourceDefinitionSpec;
    /** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
    status?: Maybe<V1CustomResourceDefinitionStatus>;
};

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export type V1CustomResourceDefinitionCondition = {
    __typename?: "V1CustomResourceDefinitionCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** message is a human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** reason is a unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** status is the status of the condition. Can be True, False, Unknown. */
    status: Scalars["String"];
    /** type is the type of the condition. Types include Established, NamesAccepted and Terminating. */
    type: Scalars["String"];
};

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export type V1CustomResourceDefinitionList = {
    __typename?: "V1CustomResourceDefinitionList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items list individual CustomResourceDefinition objects */
    items: Array<Maybe<V1CustomResourceDefinition>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export type V1CustomResourceDefinitionNames = {
    __typename?: "V1CustomResourceDefinitionNames";
    /** categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`. */
    categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls. */
    kind: Scalars["String"];
    /** listKind is the serialized kind of the list for this resource. Defaults to "`kind`List". */
    listKind?: Maybe<Scalars["String"]>;
    /** plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase. */
    plural: Scalars["String"];
    /** shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase. */
    shortNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`. */
    singular?: Maybe<Scalars["String"]>;
};

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export type V1CustomResourceDefinitionSpec = {
    __typename?: "V1CustomResourceDefinitionSpec";
    /** CustomResourceConversion describes how to convert different versions of a CR. */
    conversion?: Maybe<V1CustomResourceConversion>;
    /** group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). */
    group: Scalars["String"];
    /** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
    names: V1CustomResourceDefinitionNames;
    /** preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#pruning-versus-preserving-unknown-fields for details. */
    preserveUnknownFields?: Maybe<Scalars["Boolean"]>;
    /** scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`. */
    scope: Scalars["String"];
    /** versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    versions: Array<Maybe<V1CustomResourceDefinitionVersion>>;
};

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export type V1CustomResourceDefinitionStatus = {
    __typename?: "V1CustomResourceDefinitionStatus";
    /** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
    acceptedNames?: Maybe<V1CustomResourceDefinitionNames>;
    /** conditions indicate state for particular aspects of a CustomResourceDefinition */
    conditions?: Maybe<Array<Maybe<V1CustomResourceDefinitionCondition>>>;
    /** storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list. */
    storedVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** CustomResourceDefinitionVersion describes a version for CRD. */
export type V1CustomResourceDefinitionVersion = {
    __typename?: "V1CustomResourceDefinitionVersion";
    /** additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used. */
    additionalPrinterColumns?: Maybe<
        Array<Maybe<V1CustomResourceColumnDefinition>>
    >;
    /** deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. */
    deprecated?: Maybe<Scalars["Boolean"]>;
    /** deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. */
    deprecationWarning?: Maybe<Scalars["String"]>;
    /** name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true. */
    name: Scalars["String"];
    /** CustomResourceValidation is a list of validation methods for CustomResources. */
    schema?: Maybe<V1CustomResourceValidation>;
    /** served is a flag enabling/disabling this version from being served via REST APIs */
    served: Scalars["Boolean"];
    /** storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true. */
    storage: Scalars["Boolean"];
    /** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
    subresources?: Maybe<V1CustomResourceSubresources>;
};

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export type V1CustomResourceSubresourceScale = {
    __typename?: "V1CustomResourceSubresourceScale";
    /** labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string. */
    labelSelectorPath?: Maybe<Scalars["String"]>;
    /** specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET. */
    specReplicasPath: Scalars["String"];
    /** statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0. */
    statusReplicasPath: Scalars["String"];
};

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export type V1CustomResourceSubresources = {
    __typename?: "V1CustomResourceSubresources";
    /** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
    scale?: Maybe<V1CustomResourceSubresourceScale>;
    /** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
    status?: Maybe<Scalars["JSON"]>;
};

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export type V1CustomResourceValidation = {
    __typename?: "V1CustomResourceValidation";
    /** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
    openAPIV3Schema?: Maybe<V1JsonSchemaProps>;
};

/** DaemonEndpoint contains information about a single Daemon endpoint. */
export type V1DaemonEndpoint = {
    __typename?: "V1DaemonEndpoint";
    /** Port number of the given endpoint. */
    port: Scalars["Int"];
};

/** DaemonSet represents the configuration of a daemon set. */
export type V1DaemonSet = {
    __typename?: "V1DaemonSet";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** DaemonSetSpec is the specification of a daemon set. */
    spec?: Maybe<V1DaemonSetSpec>;
    /** DaemonSetStatus represents the current status of a daemon set. */
    status?: Maybe<V1DaemonSetStatus>;
};

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export type V1DaemonSetCondition = {
    __typename?: "V1DaemonSetCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** A human readable message indicating details about the transition. */
    message?: Maybe<Scalars["String"]>;
    /** The reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of DaemonSet condition. */
    type: Scalars["String"];
};

/** DaemonSetList is a collection of daemon sets. */
export type V1DaemonSetList = {
    __typename?: "V1DaemonSetList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** A list of daemon sets. */
    items: Array<Maybe<V1DaemonSet>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** DaemonSetSpec is the specification of a daemon set. */
export type V1DaemonSetSpec = {
    __typename?: "V1DaemonSetSpec";
    /** The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). */
    minReadySeconds?: Maybe<Scalars["Int"]>;
    /** The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
    revisionHistoryLimit?: Maybe<Scalars["Int"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector: V1LabelSelector;
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template: V1PodTemplateSpec;
    /** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
    updateStrategy?: Maybe<V1DaemonSetUpdateStrategy>;
};

/** DaemonSetStatus represents the current status of a daemon set. */
export type V1DaemonSetStatus = {
    __typename?: "V1DaemonSetStatus";
    /** Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
    collisionCount?: Maybe<Scalars["Int"]>;
    /** Represents the latest available observations of a DaemonSet's current state. */
    conditions?: Maybe<Array<Maybe<V1DaemonSetCondition>>>;
    /** The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
    currentNumberScheduled: Scalars["Int"];
    /** The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
    desiredNumberScheduled: Scalars["Int"];
    /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) */
    numberAvailable?: Maybe<Scalars["Int"]>;
    /** The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
    numberMisscheduled: Scalars["Int"];
    /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. */
    numberReady: Scalars["Int"];
    /** The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) */
    numberUnavailable?: Maybe<Scalars["Int"]>;
    /** The most recent generation observed by the daemon set controller. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** The total number of nodes that are running updated daemon pod */
    updatedNumberScheduled?: Maybe<Scalars["Int"]>;
};

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export type V1DaemonSetUpdateStrategy = {
    __typename?: "V1DaemonSetUpdateStrategy";
    /** Spec to control the desired behavior of daemon set rolling update. */
    rollingUpdate?: Maybe<V1RollingUpdateDaemonSet>;
    /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate. */
    type?: Maybe<Scalars["String"]>;
};

/** DeleteOptions may be provided when deleting an API object. */
export type V1DeleteOptions = {
    __typename?: "V1DeleteOptions";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
    gracePeriodSeconds?: Maybe<Scalars["Float"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
    orphanDependents?: Maybe<Scalars["Boolean"]>;
    /** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
    preconditions?: Maybe<V1Preconditions>;
    /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
    propagationPolicy?: Maybe<Scalars["String"]>;
};

/** Deployment enables declarative updates for Pods and ReplicaSets. */
export type V1Deployment = {
    __typename?: "V1Deployment";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** DeploymentSpec is the specification of the desired behavior of the Deployment. */
    spec?: Maybe<V1DeploymentSpec>;
    /** DeploymentStatus is the most recently observed status of the Deployment. */
    status?: Maybe<V1DeploymentStatus>;
};

/** DeploymentCondition describes the state of a deployment at a certain point. */
export type V1DeploymentCondition = {
    __typename?: "V1DeploymentCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastUpdateTime?: Maybe<Scalars["String"]>;
    /** A human readable message indicating details about the transition. */
    message?: Maybe<Scalars["String"]>;
    /** The reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of deployment condition. */
    type: Scalars["String"];
};

/** DeploymentList is a list of Deployments. */
export type V1DeploymentList = {
    __typename?: "V1DeploymentList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of Deployments. */
    items: Array<Maybe<V1Deployment>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type V1DeploymentSpec = {
    __typename?: "V1DeploymentSpec";
    /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
    minReadySeconds?: Maybe<Scalars["Int"]>;
    /** Indicates that the deployment is paused. */
    paused?: Maybe<Scalars["Boolean"]>;
    /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. */
    progressDeadlineSeconds?: Maybe<Scalars["Int"]>;
    /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
    replicas?: Maybe<Scalars["Int"]>;
    /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
    revisionHistoryLimit?: Maybe<Scalars["Int"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector: V1LabelSelector;
    /** DeploymentStrategy describes how to replace existing pods with new ones. */
    strategy?: Maybe<V1DeploymentStrategy>;
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template: V1PodTemplateSpec;
};

/** DeploymentStatus is the most recently observed status of the Deployment. */
export type V1DeploymentStatus = {
    __typename?: "V1DeploymentStatus";
    /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
    availableReplicas?: Maybe<Scalars["Int"]>;
    /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
    collisionCount?: Maybe<Scalars["Int"]>;
    /** Represents the latest available observations of a deployment's current state. */
    conditions?: Maybe<Array<Maybe<V1DeploymentCondition>>>;
    /** The generation observed by the deployment controller. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** Total number of ready pods targeted by this deployment. */
    readyReplicas?: Maybe<Scalars["Int"]>;
    /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
    replicas?: Maybe<Scalars["Int"]>;
    /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
    unavailableReplicas?: Maybe<Scalars["Int"]>;
    /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
    updatedReplicas?: Maybe<Scalars["Int"]>;
};

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export type V1DeploymentStrategy = {
    __typename?: "V1DeploymentStrategy";
    /** Spec to control the desired behavior of rolling update. */
    rollingUpdate?: Maybe<V1RollingUpdateDeployment>;
    /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
    type?: Maybe<Scalars["String"]>;
};

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export type V1DownwardApiProjection = {
    __typename?: "V1DownwardAPIProjection";
    /** Items is a list of DownwardAPIVolume file */
    items?: Maybe<Array<Maybe<V1DownwardApiVolumeFile>>>;
};

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export type V1DownwardApiVolumeFile = {
    __typename?: "V1DownwardAPIVolumeFile";
    /** ObjectFieldSelector selects an APIVersioned field of an object. */
    fieldRef?: Maybe<V1ObjectFieldSelector>;
    /** Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
    mode?: Maybe<Scalars["Int"]>;
    /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
    path: Scalars["String"];
    /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
    resourceFieldRef?: Maybe<V1ResourceFieldSelector>;
};

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export type V1DownwardApiVolumeSource = {
    __typename?: "V1DownwardAPIVolumeSource";
    /** Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
    defaultMode?: Maybe<Scalars["Int"]>;
    /** Items is a list of downward API volume file */
    items?: Maybe<Array<Maybe<V1DownwardApiVolumeFile>>>;
};

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export type V1EmptyDirVolumeSource = {
    __typename?: "V1EmptyDirVolumeSource";
    /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
    medium?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    sizeLimit?: Maybe<Scalars["String"]>;
};

/** Endpoint represents a single logical "backend" implementing a service. */
export type V1Endpoint = {
    __typename?: "V1Endpoint";
    /** addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. */
    addresses: Array<Maybe<Scalars["String"]>>;
    /** EndpointConditions represents the current condition of an endpoint. */
    conditions?: Maybe<V1EndpointConditions>;
    /** deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead. */
    deprecatedTopology?: Maybe<Scalars["JSON"]>;
    /** EndpointHints provides hints describing how an endpoint should be consumed. */
    hints?: Maybe<V1EndpointHints>;
    /** hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation. */
    hostname?: Maybe<Scalars["String"]>;
    /** nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node. This field can be enabled with the EndpointSliceNodeName feature gate. */
    nodeName?: Maybe<Scalars["String"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    targetRef?: Maybe<V1ObjectReference>;
    /** zone is the name of the Zone this endpoint exists in. */
    zone?: Maybe<Scalars["String"]>;
};

/** EndpointAddress is a tuple that describes single IP address. */
export type V1EndpointAddress = {
    __typename?: "V1EndpointAddress";
    /** The Hostname of this endpoint */
    hostname?: Maybe<Scalars["String"]>;
    /** The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready. */
    ip: Scalars["String"];
    /** Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node. */
    nodeName?: Maybe<Scalars["String"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    targetRef?: Maybe<V1ObjectReference>;
};

/** EndpointConditions represents the current condition of an endpoint. */
export type V1EndpointConditions = {
    __typename?: "V1EndpointConditions";
    /** ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints. */
    ready?: Maybe<Scalars["Boolean"]>;
    /** serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition. This field can be enabled with the EndpointSliceTerminatingCondition feature gate. */
    serving?: Maybe<Scalars["Boolean"]>;
    /** terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating. This field can be enabled with the EndpointSliceTerminatingCondition feature gate. */
    terminating?: Maybe<Scalars["Boolean"]>;
};

/** EndpointHints provides hints describing how an endpoint should be consumed. */
export type V1EndpointHints = {
    __typename?: "V1EndpointHints";
    /** forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing. */
    forZones?: Maybe<Array<Maybe<V1ForZone>>>;
};

/** EndpointPort represents a Port used by an EndpointSlice */
export type V1EndpointPort = {
    __typename?: "V1EndpointPort";
    /** The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol. */
    appProtocol?: Maybe<Scalars["String"]>;
    /** The name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is dervied from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string. */
    name?: Maybe<Scalars["String"]>;
    /** The port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer. */
    port: Scalars["Int"];
    /** The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. */
    protocol?: Maybe<Scalars["String"]>;
};

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export type V1EndpointSlice = {
    __typename?: "V1EndpointSlice";
    /** addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name. */
    addressType: Scalars["String"];
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints. */
    endpoints: Array<Maybe<V1Endpoint>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports. */
    ports?: Maybe<Array<Maybe<V1EndpointPort>>>;
};

/** EndpointSliceList represents a list of endpoint slices */
export type V1EndpointSliceList = {
    __typename?: "V1EndpointSliceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of endpoint slices */
    items: Array<Maybe<V1EndpointSlice>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 *   {
 *     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *     Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *   }
 * The resulting set of endpoints can be viewed as:
 *     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 *     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 */
export type V1EndpointSubset = {
    __typename?: "V1EndpointSubset";
    /** IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize. */
    addresses?: Maybe<Array<Maybe<V1EndpointAddress>>>;
    /** IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check. */
    notReadyAddresses?: Maybe<Array<Maybe<V1EndpointAddress>>>;
    /** Port numbers available on the related IP addresses. */
    ports?: Maybe<Array<Maybe<V1EndpointPort>>>;
};

/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 *   Name: "mysvc",
 *   Subsets: [
 *     {
 *       Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *       Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *     },
 *     {
 *       Addresses: [{"ip": "10.10.3.3"}],
 *       Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
 *     },
 *  ]
 */
export type V1Endpoints = {
    __typename?: "V1Endpoints";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service. */
    subsets?: Maybe<Array<Maybe<V1EndpointSubset>>>;
};

/** EndpointsList is a list of endpoints. */
export type V1EndpointsList = {
    __typename?: "V1EndpointsList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of endpoints. */
    items: Array<Maybe<V1Endpoints>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** EnvFromSource represents the source of a set of ConfigMaps */
export type V1EnvFromSource = {
    __typename?: "V1EnvFromSource";
    /**
     * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
     *
     * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
     */
    configMapRef?: Maybe<V1ConfigMapEnvSource>;
    /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
    prefix?: Maybe<Scalars["String"]>;
    /**
     * SecretEnvSource selects a Secret to populate the environment variables with.
     *
     * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
     */
    secretRef?: Maybe<V1SecretEnvSource>;
};

/** EnvVar represents an environment variable present in a Container. */
export type V1EnvVar = {
    __typename?: "V1EnvVar";
    /** Name of the environment variable. Must be a C_IDENTIFIER. */
    name: Scalars["String"];
    /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
    value?: Maybe<Scalars["String"]>;
    /** EnvVarSource represents a source for the value of an EnvVar. */
    valueFrom?: Maybe<V1EnvVarSource>;
};

/** EnvVarSource represents a source for the value of an EnvVar. */
export type V1EnvVarSource = {
    __typename?: "V1EnvVarSource";
    /** Selects a key from a ConfigMap. */
    configMapKeyRef?: Maybe<V1ConfigMapKeySelector>;
    /** ObjectFieldSelector selects an APIVersioned field of an object. */
    fieldRef?: Maybe<V1ObjectFieldSelector>;
    /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
    resourceFieldRef?: Maybe<V1ResourceFieldSelector>;
    /** SecretKeySelector selects a key of a Secret. */
    secretKeyRef?: Maybe<V1SecretKeySelector>;
};

/** An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag. */
export type V1EphemeralContainer = {
    __typename?: "V1EphemeralContainer";
    /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
    args?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
    command?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** List of environment variables to set in the container. Cannot be updated. */
    env?: Maybe<Array<Maybe<V1EnvVar>>>;
    /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
    envFrom?: Maybe<Array<Maybe<V1EnvFromSource>>>;
    /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images */
    image?: Maybe<Scalars["String"]>;
    /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
    imagePullPolicy?: Maybe<Scalars["String"]>;
    /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
    lifecycle?: Maybe<V1Lifecycle>;
    /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    livenessProbe?: Maybe<V1Probe>;
    /** Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers. */
    name: Scalars["String"];
    /** Ports are not allowed for ephemeral containers. */
    ports?: Maybe<Array<Maybe<V1ContainerPort>>>;
    /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    readinessProbe?: Maybe<V1Probe>;
    /** ResourceRequirements describes the compute resource requirements. */
    resources?: Maybe<V1ResourceRequirements>;
    /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
    securityContext?: Maybe<V1SecurityContext>;
    /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    startupProbe?: Maybe<V1Probe>;
    /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
    stdin?: Maybe<Scalars["Boolean"]>;
    /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
    stdinOnce?: Maybe<Scalars["Boolean"]>;
    /** If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container is run in whatever namespaces are shared for the pod. Note that the container runtime must support this feature. */
    targetContainerName?: Maybe<Scalars["String"]>;
    /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
    terminationMessagePath?: Maybe<Scalars["String"]>;
    /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
    terminationMessagePolicy?: Maybe<Scalars["String"]>;
    /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
    tty?: Maybe<Scalars["Boolean"]>;
    /** volumeDevices is the list of block devices to be used by the container. */
    volumeDevices?: Maybe<Array<Maybe<V1VolumeDevice>>>;
    /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
    volumeMounts?: Maybe<Array<Maybe<V1VolumeMount>>>;
    /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
    workingDir?: Maybe<Scalars["String"]>;
};

/** A list of ephemeral containers used with the Pod ephemeralcontainers subresource. */
export type V1EphemeralContainers = {
    __typename?: "V1EphemeralContainers";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** A list of ephemeral containers associated with this pod. New ephemeral containers may be appended to this list, but existing ephemeral containers may not be removed or modified. */
    ephemeralContainers: Array<Maybe<V1EphemeralContainer>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
};

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export type V1EphemeralVolumeSource = {
    __typename?: "V1EphemeralVolumeSource";
    /** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
    volumeClaimTemplate?: Maybe<V1PersistentVolumeClaimTemplate>;
};

/** Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export type V1Event = {
    __typename?: "V1Event";
    /** action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters. */
    action?: Maybe<Scalars["String"]>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** The number of times this event has occurred. */
    count?: Maybe<Scalars["Int"]>;
    /** deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type. */
    deprecatedCount?: Maybe<Scalars["Int"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    deprecatedFirstTimestamp?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    deprecatedLastTimestamp?: Maybe<Scalars["String"]>;
    /** EventSource contains information for an event. */
    deprecatedSource?: Maybe<V1EventSource>;
    /** MicroTime is version of Time with microsecond level precision. */
    eventTime: Scalars["String"];
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    firstTimestamp?: Maybe<Scalars["String"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    involvedObject: V1ObjectReference;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTimestamp?: Maybe<Scalars["String"]>;
    /** A human-readable description of the status of this operation. */
    message?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata: V1ObjectMeta;
    /** note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB. */
    note?: Maybe<Scalars["String"]>;
    /** reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters. */
    reason?: Maybe<Scalars["String"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    regarding?: Maybe<V1ObjectReference>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    related?: Maybe<V1ObjectReference>;
    /** Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. */
    reportingComponent?: Maybe<Scalars["String"]>;
    /** reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events. */
    reportingController?: Maybe<Scalars["String"]>;
    /** reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters. */
    reportingInstance?: Maybe<Scalars["String"]>;
    /** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations. */
    series?: Maybe<V1EventSeries>;
    /** EventSource contains information for an event. */
    source?: Maybe<V1EventSource>;
    /** type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events. */
    type?: Maybe<Scalars["String"]>;
};

/** EventList is a list of Event objects. */
export type V1EventList = {
    __typename?: "V1EventList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is a list of schema objects. */
    items: Array<Maybe<V1Event>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations. */
export type V1EventSeries = {
    __typename?: "V1EventSeries";
    /** count is the number of occurrences in this series up to the last heartbeat time. */
    count: Scalars["Int"];
    /** MicroTime is version of Time with microsecond level precision. */
    lastObservedTime: Scalars["String"];
};

/** EventSource contains information for an event. */
export type V1EventSource = {
    __typename?: "V1EventSource";
    /** Component from which the event is generated. */
    component?: Maybe<Scalars["String"]>;
    /** Node name on which the event is generated. */
    host?: Maybe<Scalars["String"]>;
};

/** Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export type V1Eviction = {
    __typename?: "V1Eviction";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** DeleteOptions may be provided when deleting an API object. */
    deleteOptions?: Maybe<V1DeleteOptions>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
};

/** ExecAction describes a "run in container" action. */
export type V1ExecAction = {
    __typename?: "V1ExecAction";
    /** Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
    command?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export type V1ExternalDocumentation = {
    __typename?: "V1ExternalDocumentation";
    description?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export type V1FcVolumeSource = {
    __typename?: "V1FCVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** Optional: FC target lun number */
    lun?: Maybe<Scalars["Int"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Optional: FC target worldwide names (WWNs) */
    targetWWNs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
    wwids?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export type V1FlexPersistentVolumeSource = {
    __typename?: "V1FlexPersistentVolumeSource";
    /** Driver is the name of the driver to use for this volume. */
    driver: Scalars["String"];
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
    fsType?: Maybe<Scalars["String"]>;
    /** Optional: Extra command options if any. */
    options?: Maybe<Scalars["JSON"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    secretRef?: Maybe<V1SecretReference>;
};

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export type V1FlexVolumeSource = {
    __typename?: "V1FlexVolumeSource";
    /** Driver is the name of the driver to use for this volume. */
    driver: Scalars["String"];
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
    fsType?: Maybe<Scalars["String"]>;
    /** Optional: Extra command options if any. */
    options?: Maybe<Scalars["JSON"]>;
    /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef?: Maybe<V1LocalObjectReference>;
};

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export type V1FlockerVolumeSource = {
    __typename?: "V1FlockerVolumeSource";
    /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
    datasetName?: Maybe<Scalars["String"]>;
    /** UUID of the dataset. This is unique identifier of a Flocker dataset */
    datasetUUID?: Maybe<Scalars["String"]>;
};

/** ForZone provides information about which zones should consume this endpoint. */
export type V1ForZone = {
    __typename?: "V1ForZone";
    /** name represents the name of the zone. */
    name: Scalars["String"];
};

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export type V1GcePersistentDiskVolumeSource = {
    __typename?: "V1GCEPersistentDiskVolumeSource";
    /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
    fsType?: Maybe<Scalars["String"]>;
    /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
    partition?: Maybe<Scalars["Int"]>;
    /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
    pdName: Scalars["String"];
    /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
    readOnly?: Maybe<Scalars["Boolean"]>;
};

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export type V1GitRepoVolumeSource = {
    __typename?: "V1GitRepoVolumeSource";
    /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
    directory?: Maybe<Scalars["String"]>;
    /** Repository URL */
    repository: Scalars["String"];
    /** Commit hash for the specified revision. */
    revision?: Maybe<Scalars["String"]>;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type V1GlusterfsPersistentVolumeSource = {
    __typename?: "V1GlusterfsPersistentVolumeSource";
    /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    endpoints: Scalars["String"];
    /** EndpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    endpointsNamespace?: Maybe<Scalars["String"]>;
    /** Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    path: Scalars["String"];
    /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    readOnly?: Maybe<Scalars["Boolean"]>;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type V1GlusterfsVolumeSource = {
    __typename?: "V1GlusterfsVolumeSource";
    /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    endpoints: Scalars["String"];
    /** Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    path: Scalars["String"];
    /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
    readOnly?: Maybe<Scalars["Boolean"]>;
};

/** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export type V1GroupVersionForDiscovery = {
    __typename?: "V1GroupVersionForDiscovery";
    /** groupVersion specifies the API group and version in the form "group/version" */
    groupVersion: Scalars["String"];
    /** version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion. */
    version: Scalars["String"];
};

/** HTTPGetAction describes an action based on HTTP Get requests. */
export type V1HttpGetAction = {
    __typename?: "V1HTTPGetAction";
    /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
    host?: Maybe<Scalars["String"]>;
    /** Custom headers to set in the request. HTTP allows repeated headers. */
    httpHeaders?: Maybe<Array<Maybe<V1HttpHeader>>>;
    /** Path to access on the HTTP server. */
    path?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    port: Scalars["String"];
    /** Scheme to use for connecting to the host. Defaults to HTTP. */
    scheme?: Maybe<Scalars["String"]>;
};

/** HTTPHeader describes a custom header to be used in HTTP probes */
export type V1HttpHeader = {
    __typename?: "V1HTTPHeader";
    /** The header field name */
    name: Scalars["String"];
    /** The header field value */
    value: Scalars["String"];
};

/** HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export type V1HttpIngressPath = {
    __typename?: "V1HTTPIngressPath";
    /** IngressBackend describes all endpoints for a given service and port. */
    backend: V1IngressBackend;
    /** Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. When unspecified, all paths from incoming requests are matched. */
    path?: Maybe<Scalars["String"]>;
    /**
     * PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
     *   done on a path element by element basis. A path element refers is the
     *   list of labels in the path split by the '/' separator. A request is a
     *   match for path p if every p is an element-wise prefix of p of the
     *   request path. Note that if the last element of the path is a substring
     *   of the last element in request path, it is not a match (e.g. /foo/bar
     *   matches /foo/bar/baz, but does not match /foo/barbaz).
     * * ImplementationSpecific: Interpretation of the Path matching is up to
     *   the IngressClass. Implementations can treat this as a separate PathType
     *   or treat it identically to Prefix or Exact path types.
     * Implementations are required to support all path types.
     */
    pathType?: Maybe<Scalars["String"]>;
};

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export type V1HttpIngressRuleValue = {
    __typename?: "V1HTTPIngressRuleValue";
    /** A collection of paths that map requests to backends. */
    paths: Array<Maybe<V1HttpIngressPath>>;
};

/** Handler defines a specific action that should be taken */
export type V1Handler = {
    __typename?: "V1Handler";
    /** ExecAction describes a "run in container" action. */
    exec?: Maybe<V1ExecAction>;
    /** HTTPGetAction describes an action based on HTTP Get requests. */
    httpGet?: Maybe<V1HttpGetAction>;
    /** TCPSocketAction describes an action based on opening a socket */
    tcpSocket?: Maybe<V1TcpSocketAction>;
};

/** configuration of a horizontal pod autoscaler. */
export type V1HorizontalPodAutoscaler = {
    __typename?: "V1HorizontalPodAutoscaler";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** specification of a horizontal pod autoscaler. */
    spec?: Maybe<V1HorizontalPodAutoscalerSpec>;
    /** current status of a horizontal pod autoscaler */
    status?: Maybe<V1HorizontalPodAutoscalerStatus>;
};

/** list of horizontal pod autoscaler objects. */
export type V1HorizontalPodAutoscalerList = {
    __typename?: "V1HorizontalPodAutoscalerList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** list of horizontal pod autoscaler objects. */
    items: Array<Maybe<V1HorizontalPodAutoscaler>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** specification of a horizontal pod autoscaler. */
export type V1HorizontalPodAutoscalerSpec = {
    __typename?: "V1HorizontalPodAutoscalerSpec";
    /** upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. */
    maxReplicas: Scalars["Int"];
    /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available. */
    minReplicas?: Maybe<Scalars["Int"]>;
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    scaleTargetRef: V1CrossVersionObjectReference;
    /** target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used. */
    targetCPUUtilizationPercentage?: Maybe<Scalars["Int"]>;
};

/** current status of a horizontal pod autoscaler */
export type V1HorizontalPodAutoscalerStatus = {
    __typename?: "V1HorizontalPodAutoscalerStatus";
    /** current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU. */
    currentCPUUtilizationPercentage?: Maybe<Scalars["Int"]>;
    /** current number of replicas of pods managed by this autoscaler. */
    currentReplicas: Scalars["Int"];
    /** desired number of replicas of pods managed by this autoscaler. */
    desiredReplicas: Scalars["Int"];
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastScaleTime?: Maybe<Scalars["String"]>;
    /** most recent generation observed by this autoscaler. */
    observedGeneration?: Maybe<Scalars["Float"]>;
};

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export type V1HostAlias = {
    __typename?: "V1HostAlias";
    /** Hostnames for the above IP address. */
    hostnames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** IP address of the host file entry. */
    ip?: Maybe<Scalars["String"]>;
};

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export type V1HostPathVolumeSource = {
    __typename?: "V1HostPathVolumeSource";
    /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
    path: Scalars["String"];
    /** Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
    type?: Maybe<Scalars["String"]>;
};

/** IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export type V1IpBlock = {
    __typename?: "V1IPBlock";
    /** CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" */
    cidr: Scalars["String"];
    /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range */
    except?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type V1IscsiPersistentVolumeSource = {
    __typename?: "V1ISCSIPersistentVolumeSource";
    /** whether support iSCSI Discovery CHAP authentication */
    chapAuthDiscovery?: Maybe<Scalars["Boolean"]>;
    /** whether support iSCSI Session CHAP authentication */
    chapAuthSession?: Maybe<Scalars["Boolean"]>;
    /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
    fsType?: Maybe<Scalars["String"]>;
    /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
    initiatorName?: Maybe<Scalars["String"]>;
    /** Target iSCSI Qualified Name. */
    iqn: Scalars["String"];
    /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
    iscsiInterface?: Maybe<Scalars["String"]>;
    /** iSCSI Target Lun number. */
    lun: Scalars["Int"];
    /** iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
    portals?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    secretRef?: Maybe<V1SecretReference>;
    /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
    targetPortal: Scalars["String"];
};

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type V1IscsiVolumeSource = {
    __typename?: "V1ISCSIVolumeSource";
    /** whether support iSCSI Discovery CHAP authentication */
    chapAuthDiscovery?: Maybe<Scalars["Boolean"]>;
    /** whether support iSCSI Session CHAP authentication */
    chapAuthSession?: Maybe<Scalars["Boolean"]>;
    /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
    fsType?: Maybe<Scalars["String"]>;
    /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
    initiatorName?: Maybe<Scalars["String"]>;
    /** Target iSCSI Qualified Name. */
    iqn: Scalars["String"];
    /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
    iscsiInterface?: Maybe<Scalars["String"]>;
    /** iSCSI Target Lun number. */
    lun: Scalars["Int"];
    /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
    portals?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef?: Maybe<V1LocalObjectReference>;
    /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
    targetPortal: Scalars["String"];
};

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export type V1Ingress = {
    __typename?: "V1Ingress";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** IngressSpec describes the Ingress the user wishes to exist. */
    spec?: Maybe<V1IngressSpec>;
    /** IngressStatus describe the current state of the Ingress. */
    status?: Maybe<V1IngressStatus>;
};

/** IngressBackend describes all endpoints for a given service and port. */
export type V1IngressBackend = {
    __typename?: "V1IngressBackend";
    /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
    resource?: Maybe<V1TypedLocalObjectReference>;
    /** IngressServiceBackend references a Kubernetes Service as a Backend. */
    service?: Maybe<V1IngressServiceBackend>;
};

/** IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export type V1IngressClass = {
    __typename?: "V1IngressClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** IngressClassSpec provides information about the class of an Ingress. */
    spec?: Maybe<V1IngressClassSpec>;
};

/** IngressClassList is a collection of IngressClasses. */
export type V1IngressClassList = {
    __typename?: "V1IngressClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of IngressClasses. */
    items: Array<Maybe<V1IngressClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export type V1IngressClassParametersReference = {
    __typename?: "V1IngressClassParametersReference";
    /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
    apiGroup?: Maybe<Scalars["String"]>;
    /** Kind is the type of resource being referenced. */
    kind: Scalars["String"];
    /** Name is the name of resource being referenced. */
    name: Scalars["String"];
    /** Namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster". */
    namespace?: Maybe<Scalars["String"]>;
    /** Scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace". Field can be enabled with IngressClassNamespacedParams feature gate. */
    scope?: Maybe<Scalars["String"]>;
};

/** IngressClassSpec provides information about the class of an Ingress. */
export type V1IngressClassSpec = {
    __typename?: "V1IngressClassSpec";
    /** Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable. */
    controller?: Maybe<Scalars["String"]>;
    /** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
    parameters?: Maybe<V1IngressClassParametersReference>;
};

/** IngressList is a collection of Ingress. */
export type V1IngressList = {
    __typename?: "V1IngressList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of Ingress. */
    items: Array<Maybe<V1Ingress>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export type V1IngressRule = {
    __typename?: "V1IngressRule";
    /**
     * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
     *    the IP in the Spec of the parent Ingress.
     * 2. The `:` delimiter is not respected because ports are not allowed.
     * 	  Currently the port of an Ingress is implicitly :80 for http and
     * 	  :443 for https.
     * Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
     *
     * Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
     */
    host?: Maybe<Scalars["String"]>;
    /** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
    http?: Maybe<V1HttpIngressRuleValue>;
};

/** IngressServiceBackend references a Kubernetes Service as a Backend. */
export type V1IngressServiceBackend = {
    __typename?: "V1IngressServiceBackend";
    /** Name is the referenced service. The service must exist in the same namespace as the Ingress object. */
    name: Scalars["String"];
    /** ServiceBackendPort is the service port being referenced. */
    port?: Maybe<V1ServiceBackendPort>;
};

/** IngressSpec describes the Ingress the user wishes to exist. */
export type V1IngressSpec = {
    __typename?: "V1IngressSpec";
    /** IngressBackend describes all endpoints for a given service and port. */
    defaultBackend?: Maybe<V1IngressBackend>;
    /** IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation. */
    ingressClassName?: Maybe<Scalars["String"]>;
    /** A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend. */
    rules?: Maybe<Array<Maybe<V1IngressRule>>>;
    /** TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI. */
    tls?: Maybe<Array<Maybe<V1IngressTls>>>;
};

/** IngressStatus describe the current state of the Ingress. */
export type V1IngressStatus = {
    __typename?: "V1IngressStatus";
    /** LoadBalancerStatus represents the status of a load-balancer. */
    loadBalancer?: Maybe<V1LoadBalancerStatus>;
};

/** IngressTLS describes the transport layer security associated with an Ingress. */
export type V1IngressTls = {
    __typename?: "V1IngressTLS";
    /** Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified. */
    hosts?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing. */
    secretName?: Maybe<Scalars["String"]>;
};

/** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
export type V1JsonSchemaProps = {
    __typename?: "V1JSONSchemaProps";
    /** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
    additionalItems?: Maybe<Scalars["JSON"]>;
    /** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
    additionalProperties?: Maybe<Scalars["JSON"]>;
    allOf?: Maybe<Array<Maybe<V1JsonSchemaProps>>>;
    anyOf?: Maybe<Array<Maybe<V1JsonSchemaProps>>>;
    /** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
    default?: Maybe<Scalars["JSON"]>;
    definitions?: Maybe<Scalars["JSON"]>;
    dependencies?: Maybe<Scalars["JSON"]>;
    description?: Maybe<Scalars["String"]>;
    enum?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
    /** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
    example?: Maybe<Scalars["JSON"]>;
    exclusiveMaximum?: Maybe<Scalars["Boolean"]>;
    exclusiveMinimum?: Maybe<Scalars["Boolean"]>;
    /** ExternalDocumentation allows referencing an external resource for extended documentation. */
    externalDocs?: Maybe<V1ExternalDocumentation>;
    /**
     * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:
     *
     * - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\d{3}[- ]?\d{2}[- ]?\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.
     */
    format?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["String"]>;
    /** JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
    items?: Maybe<Scalars["JSON"]>;
    maxItems?: Maybe<Scalars["Float"]>;
    maxLength?: Maybe<Scalars["Float"]>;
    maxProperties?: Maybe<Scalars["Float"]>;
    maximum?: Maybe<Scalars["Float"]>;
    minItems?: Maybe<Scalars["Float"]>;
    minLength?: Maybe<Scalars["Float"]>;
    minProperties?: Maybe<Scalars["Float"]>;
    minimum?: Maybe<Scalars["Float"]>;
    multipleOf?: Maybe<Scalars["Float"]>;
    /** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
    not?: Maybe<V1JsonSchemaProps>;
    nullable?: Maybe<Scalars["Boolean"]>;
    oneOf?: Maybe<Array<Maybe<V1JsonSchemaProps>>>;
    pattern?: Maybe<Scalars["String"]>;
    patternProperties?: Maybe<Scalars["JSON"]>;
    properties?: Maybe<Scalars["JSON"]>;
    ref?: Maybe<Scalars["String"]>;
    required?: Maybe<Array<Maybe<Scalars["String"]>>>;
    schema?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    uniqueItems?: Maybe<Scalars["Boolean"]>;
    /** x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata). */
    xKubernetesEmbeddedResource?: Maybe<Scalars["Boolean"]>;
    /**
     * x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:
     *
     * 1) anyOf:
     *    - type: integer
     *    - type: string
     * 2) allOf:
     *    - anyOf:
     *      - type: integer
     *      - type: string
     *    - ... zero or more
     */
    xKubernetesIntOrString?: Maybe<Scalars["Boolean"]>;
    /**
     * x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.
     *
     * This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).
     *
     * The properties specified must either be required or have a default value, to ensure those properties are present for all list items.
     */
    xKubernetesListMapKeys?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:
     *
     * 1) `atomic`: the list is treated as a single entity, like a scalar.
     *      Atomic lists will be entirely replaced when updated. This extension
     *      may be used on any type of list (struct, scalar, ...).
     * 2) `set`:
     *      Sets are lists that must not have multiple items with the same value. Each
     *      value must be a scalar, an object with x-kubernetes-map-type `atomic` or an
     *      array with x-kubernetes-list-type `atomic`.
     * 3) `map`:
     *      These lists are like maps in that their elements have a non-index key
     *      used to identify them. Order is preserved upon merge. The map tag
     *      must only be used on a list with elements of type object.
     * Defaults to atomic for arrays.
     */
    xKubernetesListType?: Maybe<Scalars["String"]>;
    /**
     * x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:
     *
     * 1) `granular`:
     *      These maps are actual maps (key-value pairs) and each fields are independent
     *      from each other (they can each be manipulated by separate actors). This is
     *      the default behaviour for all maps.
     * 2) `atomic`: the list is treated as a single entity, like a scalar.
     *      Atomic maps will be entirely replaced when updated.
     */
    xKubernetesMapType?: Maybe<Scalars["String"]>;
    /** x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden. */
    xKubernetesPreserveUnknownFields?: Maybe<Scalars["Boolean"]>;
};

/** Job represents the configuration of a single job. */
export type V1Job = {
    __typename?: "V1Job";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** JobSpec describes how the job execution will look like. */
    spec?: Maybe<V1JobSpec>;
    /** JobStatus represents the current state of a Job. */
    status?: Maybe<V1JobStatus>;
};

/** JobCondition describes current state of a job. */
export type V1JobCondition = {
    __typename?: "V1JobCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastProbeTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Human readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** (brief) reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of job condition, Complete or Failed. */
    type: Scalars["String"];
};

/** JobList is a collection of jobs. */
export type V1JobList = {
    __typename?: "V1JobList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of Jobs. */
    items: Array<Maybe<V1Job>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** JobSpec describes how the job execution will look like. */
export type V1JobSpec = {
    __typename?: "V1JobSpec";
    /** Specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it; value must be positive integer. If a Job is suspended (at creation or through an update), this timer will effectively be stopped and reset when the Job is resumed again. */
    activeDeadlineSeconds?: Maybe<Scalars["Float"]>;
    /** Specifies the number of retries before marking this job failed. Defaults to 6 */
    backoffLimit?: Maybe<Scalars["Int"]>;
    /**
     * CompletionMode specifies how Pod completions are tracked. It can be `NonIndexed` (default) or `Indexed`.
     *
     * `NonIndexed` means that the Job is considered complete when there have been .spec.completions successfully completed Pods. Each Pod completion is homologous to each other.
     *
     * `Indexed` means that the Pods of a Job get an associated completion index from 0 to (.spec.completions - 1), available in the annotation batch.kubernetes.io/job-completion-index. The Job is considered complete when there is one successfully completed Pod for each index. When value is `Indexed`, .spec.completions must be specified and `.spec.parallelism` must be less than or equal to 10^5.
     *
     * This field is alpha-level and is only honored by servers that enable the IndexedJob feature gate. More completion modes can be added in the future. If the Job controller observes a mode that it doesn't recognize, the controller skips updates for the Job.
     */
    completionMode?: Maybe<Scalars["String"]>;
    /** Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
    completions?: Maybe<Scalars["Int"]>;
    /** manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector */
    manualSelector?: Maybe<Scalars["Boolean"]>;
    /** Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
    parallelism?: Maybe<Scalars["Int"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
    /** Suspend specifies whether the Job controller should create Pods or not. If a Job is created with suspend set to true, no Pods are created by the Job controller. If a Job is suspended after creation (i.e. the flag goes from false to true), the Job controller will delete all active Pods associated with this Job. Users must design their workload to gracefully handle this. Suspending a Job will reset the StartTime field of the Job, effectively resetting the ActiveDeadlineSeconds timer too. This is an alpha field and requires the SuspendJob feature gate to be enabled; otherwise this field may not be set to true. Defaults to false. */
    suspend?: Maybe<Scalars["Boolean"]>;
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template: V1PodTemplateSpec;
    /** ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature. */
    ttlSecondsAfterFinished?: Maybe<Scalars["Int"]>;
};

/** JobStatus represents the current state of a Job. */
export type V1JobStatus = {
    __typename?: "V1JobStatus";
    /** The number of actively running pods. */
    active?: Maybe<Scalars["Int"]>;
    /** CompletedIndexes holds the completed indexes when .spec.completionMode = "Indexed" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". */
    completedIndexes?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    completionTime?: Maybe<Scalars["String"]>;
    /** The latest available observations of an object's current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
    conditions?: Maybe<Array<Maybe<V1JobCondition>>>;
    /** The number of pods which reached phase Failed. */
    failed?: Maybe<Scalars["Int"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    startTime?: Maybe<Scalars["String"]>;
    /** The number of pods which reached phase Succeeded. */
    succeeded?: Maybe<Scalars["Int"]>;
};

/** JobTemplateSpec describes the data a Job should have when created from a template */
export type V1JobTemplateSpec = {
    __typename?: "V1JobTemplateSpec";
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** JobSpec describes how the job execution will look like. */
    spec?: Maybe<V1JobSpec>;
};

/** Maps a string key to a path within a volume. */
export type V1KeyToPath = {
    __typename?: "V1KeyToPath";
    /** The key to project. */
    key: Scalars["String"];
    /** Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
    mode?: Maybe<Scalars["Int"]>;
    /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
    path: Scalars["String"];
};

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export type V1LabelSelector = {
    __typename?: "V1LabelSelector";
    /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
    matchExpressions?: Maybe<Array<Maybe<V1LabelSelectorRequirement>>>;
    /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
    matchLabels?: Maybe<Scalars["JSON"]>;
};

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1LabelSelectorRequirement = {
    __typename?: "V1LabelSelectorRequirement";
    /** key is the label key that the selector applies to. */
    key: Scalars["String"];
    /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
    operator: Scalars["String"];
    /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
    values?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Lease defines a lease concept. */
export type V1Lease = {
    __typename?: "V1Lease";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** LeaseSpec is a specification of a Lease. */
    spec?: Maybe<V1LeaseSpec>;
};

/** LeaseList is a list of Lease objects. */
export type V1LeaseList = {
    __typename?: "V1LeaseList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of schema objects. */
    items: Array<Maybe<V1Lease>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** LeaseSpec is a specification of a Lease. */
export type V1LeaseSpec = {
    __typename?: "V1LeaseSpec";
    /** MicroTime is version of Time with microsecond level precision. */
    acquireTime?: Maybe<Scalars["String"]>;
    /** holderIdentity contains the identity of the holder of a current lease. */
    holderIdentity?: Maybe<Scalars["String"]>;
    /** leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime. */
    leaseDurationSeconds?: Maybe<Scalars["Int"]>;
    /** leaseTransitions is the number of transitions of a lease between holders. */
    leaseTransitions?: Maybe<Scalars["Int"]>;
    /** MicroTime is version of Time with microsecond level precision. */
    renewTime?: Maybe<Scalars["String"]>;
};

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export type V1Lifecycle = {
    __typename?: "V1Lifecycle";
    /** Handler defines a specific action that should be taken */
    postStart?: Maybe<V1Handler>;
    /** Handler defines a specific action that should be taken */
    preStop?: Maybe<V1Handler>;
};

/** LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export type V1LimitRange = {
    __typename?: "V1LimitRange";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
    spec?: Maybe<V1LimitRangeSpec>;
};

/** LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
export type V1LimitRangeItem = {
    __typename?: "V1LimitRangeItem";
    /** Default resource requirement limit value by resource name if resource limit is omitted. */
    default?: Maybe<Scalars["JSON"]>;
    /** DefaultRequest is the default resource requirement request value by resource name if resource request is omitted. */
    defaultRequest?: Maybe<Scalars["JSON"]>;
    /** Max usage constraints on this kind by resource name. */
    max?: Maybe<Scalars["JSON"]>;
    /** MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource. */
    maxLimitRequestRatio?: Maybe<Scalars["JSON"]>;
    /** Min usage constraints on this kind by resource name. */
    min?: Maybe<Scalars["JSON"]>;
    /** Type of resource that this limit applies to. */
    type: Scalars["String"];
};

/** LimitRangeList is a list of LimitRange items. */
export type V1LimitRangeList = {
    __typename?: "V1LimitRangeList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
    items: Array<Maybe<V1LimitRange>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export type V1LimitRangeSpec = {
    __typename?: "V1LimitRangeSpec";
    /** Limits is the list of LimitRangeItem objects that are enforced. */
    limits: Array<Maybe<V1LimitRangeItem>>;
};

/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export type V1ListMeta = {
    __typename?: "V1ListMeta";
    /** continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message. */
    continue?: Maybe<Scalars["String"]>;
    /** remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact. */
    remainingItemCount?: Maybe<Scalars["Float"]>;
    /** String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
    resourceVersion?: Maybe<Scalars["String"]>;
    /**
     * selfLink is a URL representing this object. Populated by the system. Read-only.
     *
     * DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
     */
    selfLink?: Maybe<Scalars["String"]>;
};

/** LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export type V1LoadBalancerIngress = {
    __typename?: "V1LoadBalancerIngress";
    /** Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers) */
    hostname?: Maybe<Scalars["String"]>;
    /** IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers) */
    ip?: Maybe<Scalars["String"]>;
    /** Ports is a list of records of service ports If used, every port defined in the service should have an entry in it */
    ports?: Maybe<Array<Maybe<V1PortStatus>>>;
};

/** LoadBalancerStatus represents the status of a load-balancer. */
export type V1LoadBalancerStatus = {
    __typename?: "V1LoadBalancerStatus";
    /** Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points. */
    ingress?: Maybe<Array<Maybe<V1LoadBalancerIngress>>>;
};

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export type V1LocalObjectReference = {
    __typename?: "V1LocalObjectReference";
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
};

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export type V1LocalSubjectAccessReview = {
    __typename?: "V1LocalSubjectAccessReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
    spec: V1SubjectAccessReviewSpec;
    /** SubjectAccessReviewStatus */
    status?: Maybe<V1SubjectAccessReviewStatus>;
};

/** Local represents directly-attached storage with node affinity (Beta feature) */
export type V1LocalVolumeSource = {
    __typename?: "V1LocalVolumeSource";
    /** Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...). */
    path: Scalars["String"];
};

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export type V1ManagedFieldsEntry = {
    __typename?: "V1ManagedFieldsEntry";
    /** APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
    apiVersion?: Maybe<Scalars["String"]>;
    /** FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
    fieldsType?: Maybe<Scalars["String"]>;
    /**
     * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
     *
     * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
     *
     * The exact format is defined in sigs.k8s.io/structured-merge-diff
     */
    fieldsV1?: Maybe<Scalars["JSON"]>;
    /** Manager is an identifier of the workflow managing these fields. */
    manager?: Maybe<Scalars["String"]>;
    /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
    operation?: Maybe<Scalars["String"]>;
    /** Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. */
    subresource?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    time?: Maybe<Scalars["String"]>;
};

/** MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export type V1MutatingWebhook = {
    __typename?: "V1MutatingWebhook";
    /** AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. */
    admissionReviewVersions: Array<Maybe<Scalars["String"]>>;
    /** WebhookClientConfig contains the information to make a TLS connection with the webhook */
    clientConfig: V1WebhookClientConfig;
    /** FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail. */
    failurePolicy?: Maybe<Scalars["String"]>;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     *
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
     *
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
     *
     * Defaults to "Equivalent"
     */
    matchPolicy?: Maybe<Scalars["String"]>;
    /** The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required. */
    name: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    namespaceSelector?: Maybe<V1LabelSelector>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    objectSelector?: Maybe<V1LabelSelector>;
    /**
     * reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".
     *
     * Never: the webhook will not be called more than once in a single admission evaluation.
     *
     * IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.
     *
     * Defaults to "Never".
     */
    reinvocationPolicy?: Maybe<Scalars["String"]>;
    /** Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. */
    rules?: Maybe<Array<Maybe<V1RuleWithOperations>>>;
    /** SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. */
    sideEffects: Scalars["String"];
    /** TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds. */
    timeoutSeconds?: Maybe<Scalars["Int"]>;
};

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. */
export type V1MutatingWebhookConfiguration = {
    __typename?: "V1MutatingWebhookConfiguration";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Webhooks is a list of webhooks and the affected resources and operations. */
    webhooks?: Maybe<Array<Maybe<V1MutatingWebhook>>>;
};

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export type V1MutatingWebhookConfigurationList = {
    __typename?: "V1MutatingWebhookConfigurationList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of MutatingWebhookConfiguration. */
    items: Array<Maybe<V1MutatingWebhookConfiguration>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export type V1NfsVolumeSource = {
    __typename?: "V1NFSVolumeSource";
    /** Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
    path: Scalars["String"];
    /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
    server: Scalars["String"];
};

/** Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export type V1Namespace = {
    __typename?: "V1Namespace";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** NamespaceSpec describes the attributes on a Namespace. */
    spec?: Maybe<V1NamespaceSpec>;
    /** NamespaceStatus is information about the current status of a Namespace. */
    status?: Maybe<V1NamespaceStatus>;
};

/** NamespaceCondition contains details about state of namespace. */
export type V1NamespaceCondition = {
    __typename?: "V1NamespaceCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of namespace controller condition. */
    type: Scalars["String"];
};

/** NamespaceList is a list of Namespaces. */
export type V1NamespaceList = {
    __typename?: "V1NamespaceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
    items: Array<Maybe<V1Namespace>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** NamespaceSpec describes the attributes on a Namespace. */
export type V1NamespaceSpec = {
    __typename?: "V1NamespaceSpec";
    /** Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ */
    finalizers?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** NamespaceStatus is information about the current status of a Namespace. */
export type V1NamespaceStatus = {
    __typename?: "V1NamespaceStatus";
    /** Represents the latest available observations of a namespace's current state. */
    conditions?: Maybe<Array<Maybe<V1NamespaceCondition>>>;
    /** Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ */
    phase?: Maybe<Scalars["String"]>;
};

/** NetworkPolicy describes what network traffic is allowed for a set of Pods */
export type V1NetworkPolicy = {
    __typename?: "V1NetworkPolicy";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** NetworkPolicySpec provides the specification of a NetworkPolicy */
    spec?: Maybe<V1NetworkPolicySpec>;
};

/** NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export type V1NetworkPolicyEgressRule = {
    __typename?: "V1NetworkPolicyEgressRule";
    /** List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
    ports?: Maybe<Array<Maybe<V1NetworkPolicyPort>>>;
    /** List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list. */
    to?: Maybe<Array<Maybe<V1NetworkPolicyPeer>>>;
};

/** NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export type V1NetworkPolicyIngressRule = {
    __typename?: "V1NetworkPolicyIngressRule";
    /** List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list. */
    from?: Maybe<Array<Maybe<V1NetworkPolicyPeer>>>;
    /** List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
    ports?: Maybe<Array<Maybe<V1NetworkPolicyPort>>>;
};

/** NetworkPolicyList is a list of NetworkPolicy objects. */
export type V1NetworkPolicyList = {
    __typename?: "V1NetworkPolicyList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of schema objects. */
    items: Array<Maybe<V1NetworkPolicy>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed */
export type V1NetworkPolicyPeer = {
    __typename?: "V1NetworkPolicyPeer";
    /** IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
    ipBlock?: Maybe<V1IpBlock>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    namespaceSelector?: Maybe<V1LabelSelector>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    podSelector?: Maybe<V1LabelSelector>;
};

/** NetworkPolicyPort describes a port to allow traffic on */
export type V1NetworkPolicyPort = {
    __typename?: "V1NetworkPolicyPort";
    /** If set, indicates that the range of ports from port to endPort, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port. This feature is in Alpha state and should be enabled using the Feature Gate "NetworkPolicyEndPort". */
    endPort?: Maybe<Scalars["Int"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    port?: Maybe<Scalars["String"]>;
    /** The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
    protocol?: Maybe<Scalars["String"]>;
};

/** NetworkPolicySpec provides the specification of a NetworkPolicy */
export type V1NetworkPolicySpec = {
    __typename?: "V1NetworkPolicySpec";
    /** List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8 */
    egress?: Maybe<Array<Maybe<V1NetworkPolicyEgressRule>>>;
    /** List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default) */
    ingress?: Maybe<Array<Maybe<V1NetworkPolicyIngressRule>>>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    podSelector: V1LabelSelector;
    /** List of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8 */
    policyTypes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export type V1Node = {
    __typename?: "V1Node";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** NodeSpec describes the attributes that a node is created with. */
    spec?: Maybe<V1NodeSpec>;
    /** NodeStatus is information about the current status of a node. */
    status?: Maybe<V1NodeStatus>;
};

/** NodeAddress contains information for the node's address. */
export type V1NodeAddress = {
    __typename?: "V1NodeAddress";
    /** The node address. */
    address: Scalars["String"];
    /** Node address type, one of Hostname, ExternalIP or InternalIP. */
    type: Scalars["String"];
};

/** Node affinity is a group of node affinity scheduling rules. */
export type V1NodeAffinity = {
    __typename?: "V1NodeAffinity";
    /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
    preferredDuringSchedulingIgnoredDuringExecution?: Maybe<
        Array<Maybe<V1PreferredSchedulingTerm>>
    >;
    /** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
    requiredDuringSchedulingIgnoredDuringExecution?: Maybe<V1NodeSelector>;
};

/** NodeCondition contains condition information for a node. */
export type V1NodeCondition = {
    __typename?: "V1NodeCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastHeartbeatTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Human readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** (brief) reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of node condition. */
    type: Scalars["String"];
};

/** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
export type V1NodeConfigSource = {
    __typename?: "V1NodeConfigSource";
    /** ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. */
    configMap?: Maybe<V1ConfigMapNodeConfigSource>;
};

/** NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export type V1NodeConfigStatus = {
    __typename?: "V1NodeConfigStatus";
    /** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
    active?: Maybe<V1NodeConfigSource>;
    /** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
    assigned?: Maybe<V1NodeConfigSource>;
    /** Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions. */
    error?: Maybe<Scalars["String"]>;
    /** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
    lastKnownGood?: Maybe<V1NodeConfigSource>;
};

/** NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export type V1NodeDaemonEndpoints = {
    __typename?: "V1NodeDaemonEndpoints";
    /** DaemonEndpoint contains information about a single Daemon endpoint. */
    kubeletEndpoint?: Maybe<V1DaemonEndpoint>;
};

/** NodeList is the whole list of all Nodes which have been registered with master. */
export type V1NodeList = {
    __typename?: "V1NodeList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of nodes */
    items: Array<Maybe<V1Node>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export type V1NodeSelector = {
    __typename?: "V1NodeSelector";
    /** Required. A list of node selector terms. The terms are ORed. */
    nodeSelectorTerms: Array<Maybe<V1NodeSelectorTerm>>;
};

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1NodeSelectorRequirement = {
    __typename?: "V1NodeSelectorRequirement";
    /** The label key that the selector applies to. */
    key: Scalars["String"];
    /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
    operator: Scalars["String"];
    /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
    values?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export type V1NodeSelectorTerm = {
    __typename?: "V1NodeSelectorTerm";
    /** A list of node selector requirements by node's labels. */
    matchExpressions?: Maybe<Array<Maybe<V1NodeSelectorRequirement>>>;
    /** A list of node selector requirements by node's fields. */
    matchFields?: Maybe<Array<Maybe<V1NodeSelectorRequirement>>>;
};

/** NodeSpec describes the attributes that a node is created with. */
export type V1NodeSpec = {
    __typename?: "V1NodeSpec";
    /** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
    configSource?: Maybe<V1NodeConfigSource>;
    /** Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966 */
    externalID?: Maybe<Scalars["String"]>;
    /** PodCIDR represents the pod IP range assigned to the node. */
    podCIDR?: Maybe<Scalars["String"]>;
    /** podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6. */
    podCIDRs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID> */
    providerID?: Maybe<Scalars["String"]>;
    /** If specified, the node's taints. */
    taints?: Maybe<Array<Maybe<V1Taint>>>;
    /** Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration */
    unschedulable?: Maybe<Scalars["Boolean"]>;
};

/** NodeStatus is information about the current status of a node. */
export type V1NodeStatus = {
    __typename?: "V1NodeStatus";
    /** List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See http://pr.k8s.io/79391 for an example. */
    addresses?: Maybe<Array<Maybe<V1NodeAddress>>>;
    /** Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity. */
    allocatable?: Maybe<Scalars["JSON"]>;
    /** Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity */
    capacity?: Maybe<Scalars["JSON"]>;
    /** Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition */
    conditions?: Maybe<Array<Maybe<V1NodeCondition>>>;
    /** NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
    config?: Maybe<V1NodeConfigStatus>;
    /** NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
    daemonEndpoints?: Maybe<V1NodeDaemonEndpoints>;
    /** List of container images on this node */
    images?: Maybe<Array<Maybe<V1ContainerImage>>>;
    /** NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
    nodeInfo?: Maybe<V1NodeSystemInfo>;
    /** NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated. */
    phase?: Maybe<Scalars["String"]>;
    /** List of volumes that are attached to the node. */
    volumesAttached?: Maybe<Array<Maybe<V1AttachedVolume>>>;
    /** List of attachable volumes in use (mounted) by the node. */
    volumesInUse?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
export type V1NodeSystemInfo = {
    __typename?: "V1NodeSystemInfo";
    /** The Architecture reported by the node */
    architecture: Scalars["String"];
    /** Boot ID reported by the node. */
    bootID: Scalars["String"];
    /** ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0). */
    containerRuntimeVersion: Scalars["String"];
    /** Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64). */
    kernelVersion: Scalars["String"];
    /** KubeProxy Version reported by the node. */
    kubeProxyVersion: Scalars["String"];
    /** Kubelet Version reported by the node. */
    kubeletVersion: Scalars["String"];
    /** MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html */
    machineID: Scalars["String"];
    /** The Operating System reported by the node */
    operatingSystem: Scalars["String"];
    /** OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)). */
    osImage: Scalars["String"];
    /** SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid */
    systemUUID: Scalars["String"];
};

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export type V1NonResourceAttributes = {
    __typename?: "V1NonResourceAttributes";
    /** Path is the URL path of the request */
    path?: Maybe<Scalars["String"]>;
    /** Verb is the standard HTTP verb */
    verb?: Maybe<Scalars["String"]>;
};

/** NonResourceRule holds information that describes a rule for the non-resource */
export type V1NonResourceRule = {
    __typename?: "V1NonResourceRule";
    /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all. */
    nonResourceURLs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export type V1ObjectFieldSelector = {
    __typename?: "V1ObjectFieldSelector";
    /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Path of the field to select in the specified API version. */
    fieldPath: Scalars["String"];
};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type V1ObjectMeta = {
    __typename?: "V1ObjectMeta";
    /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
    annotations?: Maybe<Scalars["JSON"]>;
    /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
    clusterName?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    creationTimestamp?: Maybe<Scalars["String"]>;
    /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
    deletionGracePeriodSeconds?: Maybe<Scalars["Float"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    deletionTimestamp?: Maybe<Scalars["String"]>;
    /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
    finalizers?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: Maybe<Scalars["String"]>;
    /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
    generation?: Maybe<Scalars["Float"]>;
    /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
    labels?: Maybe<Scalars["JSON"]>;
    /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
    managedFields?: Maybe<Array<Maybe<V1ManagedFieldsEntry>>>;
    /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
    name?: Maybe<Scalars["String"]>;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
     */
    namespace?: Maybe<Scalars["String"]>;
    /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
    ownerReferences?: Maybe<Array<Maybe<V1OwnerReference>>>;
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: Maybe<Scalars["String"]>;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only.
     *
     * DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
     */
    selfLink?: Maybe<Scalars["String"]>;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: Maybe<Scalars["String"]>;
};

/** ObjectReference contains enough information to let you inspect or modify the referred object. */
export type V1ObjectReference = {
    __typename?: "V1ObjectReference";
    /** API version of the referent. */
    apiVersion?: Maybe<Scalars["String"]>;
    /** If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. */
    fieldPath?: Maybe<Scalars["String"]>;
    /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
    namespace?: Maybe<Scalars["String"]>;
    /** Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
    resourceVersion?: Maybe<Scalars["String"]>;
    /** UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids */
    uid?: Maybe<Scalars["String"]>;
};

/** Overhead structure represents the resource overhead associated with running a pod. */
export type V1Overhead = {
    __typename?: "V1Overhead";
    /** PodFixed represents the fixed resource overhead associated with running a pod. */
    podFixed?: Maybe<Scalars["JSON"]>;
};

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export type V1OwnerReference = {
    __typename?: "V1OwnerReference";
    /** API version of the referent. */
    apiVersion: Scalars["String"];
    /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
    blockOwnerDeletion?: Maybe<Scalars["Boolean"]>;
    /** If true, this reference points to the managing controller. */
    controller?: Maybe<Scalars["Boolean"]>;
    /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind: Scalars["String"];
    /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
    name: Scalars["String"];
    /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
    uid: Scalars["String"];
};

/** PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export type V1PersistentVolume = {
    __typename?: "V1PersistentVolume";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PersistentVolumeSpec is the specification of a persistent volume. */
    spec?: Maybe<V1PersistentVolumeSpec>;
    /** PersistentVolumeStatus is the current status of a persistent volume. */
    status?: Maybe<V1PersistentVolumeStatus>;
};

/** PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export type V1PersistentVolumeClaim = {
    __typename?: "V1PersistentVolumeClaim";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
    spec?: Maybe<V1PersistentVolumeClaimSpec>;
    /** PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
    status?: Maybe<V1PersistentVolumeClaimStatus>;
};

/** PersistentVolumeClaimCondition contails details about state of pvc */
export type V1PersistentVolumeClaimCondition = {
    __typename?: "V1PersistentVolumeClaimCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastProbeTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized. */
    reason?: Maybe<Scalars["String"]>;
    status: Scalars["String"];
    type: Scalars["String"];
};

/** PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export type V1PersistentVolumeClaimList = {
    __typename?: "V1PersistentVolumeClaimList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
    items: Array<Maybe<V1PersistentVolumeClaim>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export type V1PersistentVolumeClaimSpec = {
    __typename?: "V1PersistentVolumeClaimSpec";
    /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
    accessModes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
    dataSource?: Maybe<V1TypedLocalObjectReference>;
    /** ResourceRequirements describes the compute resource requirements. */
    resources?: Maybe<V1ResourceRequirements>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
    /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
    storageClassName?: Maybe<Scalars["String"]>;
    /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
    volumeMode?: Maybe<Scalars["String"]>;
    /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
    volumeName?: Maybe<Scalars["String"]>;
};

/** PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export type V1PersistentVolumeClaimStatus = {
    __typename?: "V1PersistentVolumeClaimStatus";
    /** AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
    accessModes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Represents the actual resources of the underlying volume. */
    capacity?: Maybe<Scalars["JSON"]>;
    /** Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'. */
    conditions?: Maybe<Array<Maybe<V1PersistentVolumeClaimCondition>>>;
    /** Phase represents the current phase of PersistentVolumeClaim. */
    phase?: Maybe<Scalars["String"]>;
};

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export type V1PersistentVolumeClaimTemplate = {
    __typename?: "V1PersistentVolumeClaimTemplate";
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
    spec: V1PersistentVolumeClaimSpec;
};

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export type V1PersistentVolumeClaimVolumeSource = {
    __typename?: "V1PersistentVolumeClaimVolumeSource";
    /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
    claimName: Scalars["String"];
    /** Will force the ReadOnly setting in VolumeMounts. Default false. */
    readOnly?: Maybe<Scalars["Boolean"]>;
};

/** PersistentVolumeList is a list of PersistentVolume items. */
export type V1PersistentVolumeList = {
    __typename?: "V1PersistentVolumeList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
    items: Array<Maybe<V1PersistentVolume>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PersistentVolumeSpec is the specification of a persistent volume. */
export type V1PersistentVolumeSpec = {
    __typename?: "V1PersistentVolumeSpec";
    /** AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes */
    accessModes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * Represents a Persistent Disk resource in AWS.
     *
     * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
     */
    awsElasticBlockStore?: Maybe<V1AwsElasticBlockStoreVolumeSource>;
    /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
    azureDisk?: Maybe<V1AzureDiskVolumeSource>;
    /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
    azureFile?: Maybe<V1AzureFilePersistentVolumeSource>;
    /** A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity */
    capacity?: Maybe<Scalars["JSON"]>;
    /** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
    cephfs?: Maybe<V1CephFsPersistentVolumeSource>;
    /** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
    cinder?: Maybe<V1CinderPersistentVolumeSource>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    claimRef?: Maybe<V1ObjectReference>;
    /** Represents storage that is managed by an external CSI volume driver (Beta feature) */
    csi?: Maybe<V1CsiPersistentVolumeSource>;
    /** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
    fc?: Maybe<V1FcVolumeSource>;
    /** FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
    flexVolume?: Maybe<V1FlexPersistentVolumeSource>;
    /** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
    flocker?: Maybe<V1FlockerVolumeSource>;
    /**
     * Represents a Persistent Disk resource in Google Compute Engine.
     *
     * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
     */
    gcePersistentDisk?: Maybe<V1GcePersistentDiskVolumeSource>;
    /** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
    glusterfs?: Maybe<V1GlusterfsPersistentVolumeSource>;
    /** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
    hostPath?: Maybe<V1HostPathVolumeSource>;
    /** ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
    iscsi?: Maybe<V1IscsiPersistentVolumeSource>;
    /** Local represents directly-attached storage with node affinity (Beta feature) */
    local?: Maybe<V1LocalVolumeSource>;
    /** A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options */
    mountOptions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
    nfs?: Maybe<V1NfsVolumeSource>;
    /** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
    nodeAffinity?: Maybe<V1VolumeNodeAffinity>;
    /** What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming */
    persistentVolumeReclaimPolicy?: Maybe<Scalars["String"]>;
    /** Represents a Photon Controller persistent disk resource. */
    photonPersistentDisk?: Maybe<V1PhotonPersistentDiskVolumeSource>;
    /** PortworxVolumeSource represents a Portworx volume resource. */
    portworxVolume?: Maybe<V1PortworxVolumeSource>;
    /** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
    quobyte?: Maybe<V1QuobyteVolumeSource>;
    /** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
    rbd?: Maybe<V1RbdPersistentVolumeSource>;
    /** ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
    scaleIO?: Maybe<V1ScaleIoPersistentVolumeSource>;
    /** Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass. */
    storageClassName?: Maybe<Scalars["String"]>;
    /** Represents a StorageOS persistent volume resource. */
    storageos?: Maybe<V1StorageOsPersistentVolumeSource>;
    /** volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. */
    volumeMode?: Maybe<Scalars["String"]>;
    /** Represents a vSphere volume resource. */
    vsphereVolume?: Maybe<V1VsphereVirtualDiskVolumeSource>;
};

/** PersistentVolumeStatus is the current status of a persistent volume. */
export type V1PersistentVolumeStatus = {
    __typename?: "V1PersistentVolumeStatus";
    /** A human-readable message indicating details about why the volume is in this state. */
    message?: Maybe<Scalars["String"]>;
    /** Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase */
    phase?: Maybe<Scalars["String"]>;
    /** Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI. */
    reason?: Maybe<Scalars["String"]>;
};

/** Represents a Photon Controller persistent disk resource. */
export type V1PhotonPersistentDiskVolumeSource = {
    __typename?: "V1PhotonPersistentDiskVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** ID that identifies Photon Controller persistent disk */
    pdID: Scalars["String"];
};

/** Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export type V1Pod = {
    __typename?: "V1Pod";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PodSpec is a description of a pod. */
    spec?: Maybe<V1PodSpec>;
    /** PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
    status?: Maybe<V1PodStatus>;
};

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export type V1PodAffinity = {
    __typename?: "V1PodAffinity";
    /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
    preferredDuringSchedulingIgnoredDuringExecution?: Maybe<
        Array<Maybe<V1WeightedPodAffinityTerm>>
    >;
    /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
    requiredDuringSchedulingIgnoredDuringExecution?: Maybe<
        Array<Maybe<V1PodAffinityTerm>>
    >;
};

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export type V1PodAffinityTerm = {
    __typename?: "V1PodAffinityTerm";
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    labelSelector?: Maybe<V1LabelSelector>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    namespaceSelector?: Maybe<V1LabelSelector>;
    /** namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace" */
    namespaces?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
    topologyKey: Scalars["String"];
};

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export type V1PodAntiAffinity = {
    __typename?: "V1PodAntiAffinity";
    /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
    preferredDuringSchedulingIgnoredDuringExecution?: Maybe<
        Array<Maybe<V1WeightedPodAffinityTerm>>
    >;
    /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
    requiredDuringSchedulingIgnoredDuringExecution?: Maybe<
        Array<Maybe<V1PodAffinityTerm>>
    >;
};

/** PodCondition contains details for the current condition of this pod. */
export type V1PodCondition = {
    __typename?: "V1PodCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastProbeTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** Unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
    status: Scalars["String"];
    /** Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
    type: Scalars["String"];
};

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export type V1PodDnsConfig = {
    __typename?: "V1PodDNSConfig";
    /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
    nameservers?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
    options?: Maybe<Array<Maybe<V1PodDnsConfigOption>>>;
    /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
    searches?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export type V1PodDnsConfigOption = {
    __typename?: "V1PodDNSConfigOption";
    /** Required. */
    name?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["String"]>;
};

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export type V1PodDisruptionBudget = {
    __typename?: "V1PodDisruptionBudget";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
    spec?: Maybe<V1PodDisruptionBudgetSpec>;
    /** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
    status?: Maybe<V1PodDisruptionBudgetStatus>;
};

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export type V1PodDisruptionBudgetList = {
    __typename?: "V1PodDisruptionBudgetList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of PodDisruptionBudgets */
    items: Array<Maybe<V1PodDisruptionBudget>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export type V1PodDisruptionBudgetSpec = {
    __typename?: "V1PodDisruptionBudgetSpec";
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    maxUnavailable?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    minAvailable?: Maybe<Scalars["String"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
};

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export type V1PodDisruptionBudgetStatus = {
    __typename?: "V1PodDisruptionBudgetStatus";
    /**
     * Conditions contain conditions for PDB. The disruption controller sets the DisruptionAllowed condition. The following are known values for the reason field (additional reasons could be added in the future): - SyncFailed: The controller encountered an error and wasn't able to compute
     *               the number of allowed disruptions. Therefore no disruptions are
     *               allowed and the status of the condition will be False.
     * - InsufficientPods: The number of pods are either at or below the number
     *                     required by the PodDisruptionBudget. No disruptions are
     *                     allowed and the status of the condition will be False.
     * - SufficientPods: There are more pods than required by the PodDisruptionBudget.
     *                   The condition will be True, and the number of allowed
     *                   disruptions are provided by the disruptionsAllowed property.
     */
    conditions?: Maybe<Array<Maybe<V1Condition>>>;
    /** current number of healthy pods */
    currentHealthy: Scalars["Int"];
    /** minimum desired number of healthy pods */
    desiredHealthy: Scalars["Int"];
    /** DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions. */
    disruptedPods?: Maybe<Scalars["JSON"]>;
    /** Number of pod disruptions that are currently allowed. */
    disruptionsAllowed: Scalars["Int"];
    /** total number of pods counted by this disruption budget */
    expectedPods: Scalars["Int"];
    /** Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB's object generation. */
    observedGeneration?: Maybe<Scalars["Float"]>;
};

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export type V1PodIp = {
    __typename?: "V1PodIP";
    /** ip is an IP address (IPv4 or IPv6) assigned to the pod */
    ip?: Maybe<Scalars["String"]>;
};

/** PodList is a list of Pods. */
export type V1PodList = {
    __typename?: "V1PodList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of pods. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
    items: Array<Maybe<V1Pod>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PodReadinessGate contains the reference to a pod condition */
export type V1PodReadinessGate = {
    __typename?: "V1PodReadinessGate";
    /** ConditionType refers to a condition in the pod's condition list with matching type. */
    conditionType: Scalars["String"];
};

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export type V1PodSecurityContext = {
    __typename?: "V1PodSecurityContext";
    /**
     * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
     *
     * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
     *
     * If unset, the Kubelet will not modify the ownership and permissions of any volume.
     */
    fsGroup?: Maybe<Scalars["Float"]>;
    /** fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. */
    fsGroupChangePolicy?: Maybe<Scalars["String"]>;
    /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
    runAsGroup?: Maybe<Scalars["Float"]>;
    /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
    runAsNonRoot?: Maybe<Scalars["Boolean"]>;
    /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
    runAsUser?: Maybe<Scalars["Float"]>;
    /** SELinuxOptions are the labels to be applied to the container */
    seLinuxOptions?: Maybe<V1SeLinuxOptions>;
    /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
    seccompProfile?: Maybe<V1SeccompProfile>;
    /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. */
    supplementalGroups?: Maybe<Array<Maybe<Scalars["Float"]>>>;
    /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. */
    sysctls?: Maybe<Array<Maybe<V1Sysctl>>>;
    /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
    windowsOptions?: Maybe<V1WindowsSecurityContextOptions>;
};

/** PodSpec is a description of a pod. */
export type V1PodSpec = {
    __typename?: "V1PodSpec";
    /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
    activeDeadlineSeconds?: Maybe<Scalars["Float"]>;
    /** Affinity is a group of affinity scheduling rules. */
    affinity?: Maybe<V1Affinity>;
    /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
    automountServiceAccountToken?: Maybe<Scalars["Boolean"]>;
    /** List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
    containers: Array<Maybe<V1Container>>;
    /** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
    dnsConfig?: Maybe<V1PodDnsConfig>;
    /** Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
    dnsPolicy?: Maybe<Scalars["String"]>;
    /** EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
    enableServiceLinks?: Maybe<Scalars["Boolean"]>;
    /** List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is alpha-level and is only honored by servers that enable the EphemeralContainers feature. */
    ephemeralContainers?: Maybe<Array<Maybe<V1EphemeralContainer>>>;
    /** HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
    hostAliases?: Maybe<Array<Maybe<V1HostAlias>>>;
    /** Use the host's ipc namespace. Optional: Default to false. */
    hostIPC?: Maybe<Scalars["Boolean"]>;
    /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
    hostNetwork?: Maybe<Scalars["Boolean"]>;
    /** Use the host's pid namespace. Optional: Default to false. */
    hostPID?: Maybe<Scalars["Boolean"]>;
    /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
    hostname?: Maybe<Scalars["String"]>;
    /** ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
    imagePullSecrets?: Maybe<Array<Maybe<V1LocalObjectReference>>>;
    /** List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
    initContainers?: Maybe<Array<Maybe<V1Container>>>;
    /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
    nodeName?: Maybe<Scalars["String"]>;
    /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
    nodeSelector?: Maybe<Scalars["JSON"]>;
    /** Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md This field is beta-level as of Kubernetes v1.18, and is only honored by servers that enable the PodOverhead feature. */
    overhead?: Maybe<Scalars["JSON"]>;
    /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
    preemptionPolicy?: Maybe<Scalars["String"]>;
    /** The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. */
    priority?: Maybe<Scalars["Int"]>;
    /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
    priorityClassName?: Maybe<Scalars["String"]>;
    /** If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/0007-pod-ready%2B%2B.md */
    readinessGates?: Maybe<Array<Maybe<V1PodReadinessGate>>>;
    /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
    restartPolicy?: Maybe<Scalars["String"]>;
    /** RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md This is a beta feature as of Kubernetes v1.14. */
    runtimeClassName?: Maybe<Scalars["String"]>;
    /** If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
    schedulerName?: Maybe<Scalars["String"]>;
    /** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
    securityContext?: Maybe<V1PodSecurityContext>;
    /** DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
    serviceAccount?: Maybe<Scalars["String"]>;
    /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
    serviceAccountName?: Maybe<Scalars["String"]>;
    /** If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
    setHostnameAsFQDN?: Maybe<Scalars["Boolean"]>;
    /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
    shareProcessNamespace?: Maybe<Scalars["Boolean"]>;
    /** If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
    subdomain?: Maybe<Scalars["String"]>;
    /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. */
    terminationGracePeriodSeconds?: Maybe<Scalars["Float"]>;
    /** If specified, the pod's tolerations. */
    tolerations?: Maybe<Array<Maybe<V1Toleration>>>;
    /** TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
    topologySpreadConstraints?: Maybe<Array<Maybe<V1TopologySpreadConstraint>>>;
    /** List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
    volumes?: Maybe<Array<Maybe<V1Volume>>>;
};

/** PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
export type V1PodStatus = {
    __typename?: "V1PodStatus";
    /** Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
    conditions?: Maybe<Array<Maybe<V1PodCondition>>>;
    /** The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status */
    containerStatuses?: Maybe<Array<Maybe<V1ContainerStatus>>>;
    /** Status for any ephemeral containers that have run in this pod. This field is alpha-level and is only populated by servers that enable the EphemeralContainers feature. */
    ephemeralContainerStatuses?: Maybe<Array<Maybe<V1ContainerStatus>>>;
    /** IP address of the host to which the pod is assigned. Empty if not yet scheduled. */
    hostIP?: Maybe<Scalars["String"]>;
    /** The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status */
    initContainerStatuses?: Maybe<Array<Maybe<V1ContainerStatus>>>;
    /** A human readable message indicating details about why the pod is in this condition. */
    message?: Maybe<Scalars["String"]>;
    /** nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled. */
    nominatedNodeName?: Maybe<Scalars["String"]>;
    /**
     * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:
     *
     * Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.
     *
     * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
     */
    phase?: Maybe<Scalars["String"]>;
    /** IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated. */
    podIP?: Maybe<Scalars["String"]>;
    /** podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet. */
    podIPs?: Maybe<Array<Maybe<V1PodIp>>>;
    /** The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md */
    qosClass?: Maybe<Scalars["String"]>;
    /** A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted' */
    reason?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    startTime?: Maybe<Scalars["String"]>;
};

/** PodTemplate describes a template for creating copies of a predefined pod. */
export type V1PodTemplate = {
    __typename?: "V1PodTemplate";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template?: Maybe<V1PodTemplateSpec>;
};

/** PodTemplateList is a list of PodTemplates. */
export type V1PodTemplateList = {
    __typename?: "V1PodTemplateList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of pod templates */
    items: Array<Maybe<V1PodTemplate>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PodTemplateSpec describes the data a pod should have when created from a template */
export type V1PodTemplateSpec = {
    __typename?: "V1PodTemplateSpec";
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PodSpec is a description of a pod. */
    spec?: Maybe<V1PodSpec>;
};

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export type V1PolicyRule = {
    __typename?: "V1PolicyRule";
    /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both. */
    nonResourceURLs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
    resourceNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Resources is a list of resources this rule applies to. '*' represents all resources. */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. '*' represents all verbs. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

export type V1PortStatus = {
    __typename?: "V1PortStatus";
    /**
     * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
     *   CamelCase names
     * - cloud provider specific error values must have names that comply with the
     *   format foo.example.com/CamelCase.
     */
    error?: Maybe<Scalars["String"]>;
    /** Port is the port number of the service port of which status is recorded here */
    port: Scalars["Int"];
    /** Protocol is the protocol of the service port of which status is recorded here The supported values are: "TCP", "UDP", "SCTP" */
    protocol: Scalars["String"];
};

/** PortworxVolumeSource represents a Portworx volume resource. */
export type V1PortworxVolumeSource = {
    __typename?: "V1PortworxVolumeSource";
    /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** VolumeID uniquely identifies a Portworx volume */
    volumeID: Scalars["String"];
};

/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export type V1Preconditions = {
    __typename?: "V1Preconditions";
    /** Specifies the target ResourceVersion */
    resourceVersion?: Maybe<Scalars["String"]>;
    /** Specifies the target UID. */
    uid?: Maybe<Scalars["String"]>;
};

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export type V1PreferredSchedulingTerm = {
    __typename?: "V1PreferredSchedulingTerm";
    /** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
    preference: V1NodeSelectorTerm;
    /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
    weight: Scalars["Int"];
};

/** PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export type V1PriorityClass = {
    __typename?: "V1PriorityClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
    description?: Maybe<Scalars["String"]>;
    /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
    globalDefault?: Maybe<Scalars["Boolean"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
    preemptionPolicy?: Maybe<Scalars["String"]>;
    /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
    value: Scalars["Int"];
};

/** PriorityClassList is a collection of priority classes. */
export type V1PriorityClassList = {
    __typename?: "V1PriorityClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of PriorityClasses */
    items: Array<Maybe<V1PriorityClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export type V1Probe = {
    __typename?: "V1Probe";
    /** ExecAction describes a "run in container" action. */
    exec?: Maybe<V1ExecAction>;
    /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
    failureThreshold?: Maybe<Scalars["Int"]>;
    /** HTTPGetAction describes an action based on HTTP Get requests. */
    httpGet?: Maybe<V1HttpGetAction>;
    /** Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
    initialDelaySeconds?: Maybe<Scalars["Int"]>;
    /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
    periodSeconds?: Maybe<Scalars["Int"]>;
    /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
    successThreshold?: Maybe<Scalars["Int"]>;
    /** TCPSocketAction describes an action based on opening a socket */
    tcpSocket?: Maybe<V1TcpSocketAction>;
    /** Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. */
    terminationGracePeriodSeconds?: Maybe<Scalars["Float"]>;
    /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
    timeoutSeconds?: Maybe<Scalars["Int"]>;
};

/** Represents a projected volume source */
export type V1ProjectedVolumeSource = {
    __typename?: "V1ProjectedVolumeSource";
    /** Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
    defaultMode?: Maybe<Scalars["Int"]>;
    /** list of volume projections */
    sources?: Maybe<Array<Maybe<V1VolumeProjection>>>;
};

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export type V1QuobyteVolumeSource = {
    __typename?: "V1QuobyteVolumeSource";
    /** Group to map volume access to Default is no group */
    group?: Maybe<Scalars["String"]>;
    /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
    registry: Scalars["String"];
    /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
    tenant?: Maybe<Scalars["String"]>;
    /** User to map volume access to Defaults to serivceaccount user */
    user?: Maybe<Scalars["String"]>;
    /** Volume is a string that references an already created Quobyte volume by name. */
    volume: Scalars["String"];
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type V1RbdPersistentVolumeSource = {
    __typename?: "V1RBDPersistentVolumeSource";
    /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
    fsType?: Maybe<Scalars["String"]>;
    /** The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    image: Scalars["String"];
    /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    keyring?: Maybe<Scalars["String"]>;
    /** A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    monitors: Array<Maybe<Scalars["String"]>>;
    /** The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    pool?: Maybe<Scalars["String"]>;
    /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    secretRef?: Maybe<V1SecretReference>;
    /** The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    user?: Maybe<Scalars["String"]>;
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type V1RbdVolumeSource = {
    __typename?: "V1RBDVolumeSource";
    /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
    fsType?: Maybe<Scalars["String"]>;
    /** The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    image: Scalars["String"];
    /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    keyring?: Maybe<Scalars["String"]>;
    /** A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    monitors: Array<Maybe<Scalars["String"]>>;
    /** The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    pool?: Maybe<Scalars["String"]>;
    /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef?: Maybe<V1LocalObjectReference>;
    /** The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
    user?: Maybe<Scalars["String"]>;
};

/** ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export type V1ReplicaSet = {
    __typename?: "V1ReplicaSet";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ReplicaSetSpec is the specification of a ReplicaSet. */
    spec?: Maybe<V1ReplicaSetSpec>;
    /** ReplicaSetStatus represents the current status of a ReplicaSet. */
    status?: Maybe<V1ReplicaSetStatus>;
};

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export type V1ReplicaSetCondition = {
    __typename?: "V1ReplicaSetCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** A human readable message indicating details about the transition. */
    message?: Maybe<Scalars["String"]>;
    /** The reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of replica set condition. */
    type: Scalars["String"];
};

/** ReplicaSetList is a collection of ReplicaSets. */
export type V1ReplicaSetList = {
    __typename?: "V1ReplicaSetList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller */
    items: Array<Maybe<V1ReplicaSet>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export type V1ReplicaSetSpec = {
    __typename?: "V1ReplicaSetSpec";
    /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
    minReadySeconds?: Maybe<Scalars["Int"]>;
    /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
    replicas?: Maybe<Scalars["Int"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector: V1LabelSelector;
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template?: Maybe<V1PodTemplateSpec>;
};

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export type V1ReplicaSetStatus = {
    __typename?: "V1ReplicaSetStatus";
    /** The number of available replicas (ready for at least minReadySeconds) for this replica set. */
    availableReplicas?: Maybe<Scalars["Int"]>;
    /** Represents the latest available observations of a replica set's current state. */
    conditions?: Maybe<Array<Maybe<V1ReplicaSetCondition>>>;
    /** The number of pods that have labels matching the labels of the pod template of the replicaset. */
    fullyLabeledReplicas?: Maybe<Scalars["Int"]>;
    /** ObservedGeneration reflects the generation of the most recently observed ReplicaSet. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** The number of ready replicas for this replica set. */
    readyReplicas?: Maybe<Scalars["Int"]>;
    /** Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
    replicas: Scalars["Int"];
};

/** ReplicationController represents the configuration of a replication controller. */
export type V1ReplicationController = {
    __typename?: "V1ReplicationController";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ReplicationControllerSpec is the specification of a replication controller. */
    spec?: Maybe<V1ReplicationControllerSpec>;
    /** ReplicationControllerStatus represents the current status of a replication controller. */
    status?: Maybe<V1ReplicationControllerStatus>;
};

/** ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export type V1ReplicationControllerCondition = {
    __typename?: "V1ReplicationControllerCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** A human readable message indicating details about the transition. */
    message?: Maybe<Scalars["String"]>;
    /** The reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of replication controller condition. */
    type: Scalars["String"];
};

/** ReplicationControllerList is a collection of replication controllers. */
export type V1ReplicationControllerList = {
    __typename?: "V1ReplicationControllerList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller */
    items: Array<Maybe<V1ReplicationController>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ReplicationControllerSpec is the specification of a replication controller. */
export type V1ReplicationControllerSpec = {
    __typename?: "V1ReplicationControllerSpec";
    /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
    minReadySeconds?: Maybe<Scalars["Int"]>;
    /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller */
    replicas?: Maybe<Scalars["Int"]>;
    /** Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
    selector?: Maybe<Scalars["JSON"]>;
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template?: Maybe<V1PodTemplateSpec>;
};

/** ReplicationControllerStatus represents the current status of a replication controller. */
export type V1ReplicationControllerStatus = {
    __typename?: "V1ReplicationControllerStatus";
    /** The number of available replicas (ready for at least minReadySeconds) for this replication controller. */
    availableReplicas?: Maybe<Scalars["Int"]>;
    /** Represents the latest available observations of a replication controller's current state. */
    conditions?: Maybe<Array<Maybe<V1ReplicationControllerCondition>>>;
    /** The number of pods that have labels matching the labels of the pod template of the replication controller. */
    fullyLabeledReplicas?: Maybe<Scalars["Int"]>;
    /** ObservedGeneration reflects the generation of the most recently observed replication controller. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** The number of ready replicas for this replication controller. */
    readyReplicas?: Maybe<Scalars["Int"]>;
    /** Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller */
    replicas: Scalars["Int"];
};

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export type V1ResourceAttributes = {
    __typename?: "V1ResourceAttributes";
    /** Group is the API Group of the Resource.  "*" means all. */
    group?: Maybe<Scalars["String"]>;
    /** Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all. */
    name?: Maybe<Scalars["String"]>;
    /** Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview */
    namespace?: Maybe<Scalars["String"]>;
    /** Resource is one of the existing resource types.  "*" means all. */
    resource?: Maybe<Scalars["String"]>;
    /** Subresource is one of the existing resource types.  "" means none. */
    subresource?: Maybe<Scalars["String"]>;
    /** Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
    verb?: Maybe<Scalars["String"]>;
    /** Version is the API Version of the Resource.  "*" means all. */
    version?: Maybe<Scalars["String"]>;
};

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export type V1ResourceFieldSelector = {
    __typename?: "V1ResourceFieldSelector";
    /** Container name: required for volumes, optional for env vars */
    containerName?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    divisor?: Maybe<Scalars["String"]>;
    /** Required: resource to select */
    resource: Scalars["String"];
};

/** ResourceQuota sets aggregate quota restrictions enforced per namespace */
export type V1ResourceQuota = {
    __typename?: "V1ResourceQuota";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
    spec?: Maybe<V1ResourceQuotaSpec>;
    /** ResourceQuotaStatus defines the enforced hard limits and observed use. */
    status?: Maybe<V1ResourceQuotaStatus>;
};

/** ResourceQuotaList is a list of ResourceQuota items. */
export type V1ResourceQuotaList = {
    __typename?: "V1ResourceQuotaList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
    items: Array<Maybe<V1ResourceQuota>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export type V1ResourceQuotaSpec = {
    __typename?: "V1ResourceQuotaSpec";
    /** hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
    hard?: Maybe<Scalars["JSON"]>;
    /** A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
    scopeSelector?: Maybe<V1ScopeSelector>;
    /** A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. */
    scopes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** ResourceQuotaStatus defines the enforced hard limits and observed use. */
export type V1ResourceQuotaStatus = {
    __typename?: "V1ResourceQuotaStatus";
    /** Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
    hard?: Maybe<Scalars["JSON"]>;
    /** Used is the current observed total usage of the resource in the namespace. */
    used?: Maybe<Scalars["JSON"]>;
};

/** ResourceRequirements describes the compute resource requirements. */
export type V1ResourceRequirements = {
    __typename?: "V1ResourceRequirements";
    /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
    limits?: Maybe<Scalars["JSON"]>;
    /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
    requests?: Maybe<Scalars["JSON"]>;
};

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export type V1ResourceRule = {
    __typename?: "V1ResourceRule";
    /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all. */
    resourceNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
     *  "*\/foo" represents the subresource 'foo' for all resources in the specified apiGroups.
     */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export type V1Role = {
    __typename?: "V1Role";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Rules holds all the PolicyRules for this Role */
    rules?: Maybe<Array<Maybe<V1PolicyRule>>>;
};

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export type V1RoleBinding = {
    __typename?: "V1RoleBinding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RoleRef contains information that points to the role being used */
    roleRef: V1RoleRef;
    /** Subjects holds references to the objects the role applies to. */
    subjects?: Maybe<Array<Maybe<V1Subject>>>;
};

/** RoleBindingList is a collection of RoleBindings */
export type V1RoleBindingList = {
    __typename?: "V1RoleBindingList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of RoleBindings */
    items: Array<Maybe<V1RoleBinding>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RoleList is a collection of Roles */
export type V1RoleList = {
    __typename?: "V1RoleList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of Roles */
    items: Array<Maybe<V1Role>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RoleRef contains information that points to the role being used */
export type V1RoleRef = {
    __typename?: "V1RoleRef";
    /** APIGroup is the group for the resource being referenced */
    apiGroup: Scalars["String"];
    /** Kind is the type of resource being referenced */
    kind: Scalars["String"];
    /** Name is the name of resource being referenced */
    name: Scalars["String"];
};

/** Spec to control the desired behavior of daemon set rolling update. */
export type V1RollingUpdateDaemonSet = {
    __typename?: "V1RollingUpdateDaemonSet";
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    maxSurge?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    maxUnavailable?: Maybe<Scalars["String"]>;
};

/** Spec to control the desired behavior of rolling update. */
export type V1RollingUpdateDeployment = {
    __typename?: "V1RollingUpdateDeployment";
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    maxSurge?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    maxUnavailable?: Maybe<Scalars["String"]>;
};

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export type V1RollingUpdateStatefulSetStrategy = {
    __typename?: "V1RollingUpdateStatefulSetStrategy";
    /** Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0. */
    partition?: Maybe<Scalars["Int"]>;
};

/** RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export type V1RuleWithOperations = {
    __typename?: "V1RuleWithOperations";
    /** APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required. */
    apiVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required. */
    operations?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * Resources is a list of resources this rule applies to.
     *
     * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*\/scale' means all scale subresources. '*\/*' means all resources and their subresources.
     *
     * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
     *
     * Depending on the enclosing object, subresources might not be allowed. Required.
     */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*". */
    scope?: Maybe<Scalars["String"]>;
};

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/ */
export type V1RuntimeClass = {
    __typename?: "V1RuntimeClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable. */
    handler: Scalars["String"];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Overhead structure represents the resource overhead associated with running a pod. */
    overhead?: Maybe<V1Overhead>;
    /** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
    scheduling?: Maybe<V1Scheduling>;
};

/** RuntimeClassList is a list of RuntimeClass objects. */
export type V1RuntimeClassList = {
    __typename?: "V1RuntimeClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of schema objects. */
    items: Array<Maybe<V1RuntimeClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** SELinuxOptions are the labels to be applied to the container */
export type V1SeLinuxOptions = {
    __typename?: "V1SELinuxOptions";
    /** Level is SELinux level label that applies to the container. */
    level?: Maybe<Scalars["String"]>;
    /** Role is a SELinux role label that applies to the container. */
    role?: Maybe<Scalars["String"]>;
    /** Type is a SELinux type label that applies to the container. */
    type?: Maybe<Scalars["String"]>;
    /** User is a SELinux user label that applies to the container. */
    user?: Maybe<Scalars["String"]>;
};

/** Scale represents a scaling request for a resource. */
export type V1Scale = {
    __typename?: "V1Scale";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ScaleSpec describes the attributes of a scale subresource. */
    spec?: Maybe<V1ScaleSpec>;
    /** ScaleStatus represents the current status of a scale subresource. */
    status?: Maybe<V1ScaleStatus>;
};

/** ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
export type V1ScaleIoPersistentVolumeSource = {
    __typename?: "V1ScaleIOPersistentVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs" */
    fsType?: Maybe<Scalars["String"]>;
    /** The host address of the ScaleIO API Gateway. */
    gateway: Scalars["String"];
    /** The name of the ScaleIO Protection Domain for the configured storage. */
    protectionDomain?: Maybe<Scalars["String"]>;
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
    secretRef: V1SecretReference;
    /** Flag to enable/disable SSL communication with Gateway, default false */
    sslEnabled?: Maybe<Scalars["Boolean"]>;
    /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
    storageMode?: Maybe<Scalars["String"]>;
    /** The ScaleIO Storage Pool associated with the protection domain. */
    storagePool?: Maybe<Scalars["String"]>;
    /** The name of the storage system as configured in ScaleIO. */
    system: Scalars["String"];
    /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
    volumeName?: Maybe<Scalars["String"]>;
};

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export type V1ScaleIoVolumeSource = {
    __typename?: "V1ScaleIOVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
    fsType?: Maybe<Scalars["String"]>;
    /** The host address of the ScaleIO API Gateway. */
    gateway: Scalars["String"];
    /** The name of the ScaleIO Protection Domain for the configured storage. */
    protectionDomain?: Maybe<Scalars["String"]>;
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef: V1LocalObjectReference;
    /** Flag to enable/disable SSL communication with Gateway, default false */
    sslEnabled?: Maybe<Scalars["Boolean"]>;
    /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
    storageMode?: Maybe<Scalars["String"]>;
    /** The ScaleIO Storage Pool associated with the protection domain. */
    storagePool?: Maybe<Scalars["String"]>;
    /** The name of the storage system as configured in ScaleIO. */
    system: Scalars["String"];
    /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
    volumeName?: Maybe<Scalars["String"]>;
};

/** ScaleSpec describes the attributes of a scale subresource. */
export type V1ScaleSpec = {
    __typename?: "V1ScaleSpec";
    /** desired number of instances for the scaled object. */
    replicas?: Maybe<Scalars["Int"]>;
};

/** ScaleStatus represents the current status of a scale subresource. */
export type V1ScaleStatus = {
    __typename?: "V1ScaleStatus";
    /** actual number of observed instances of the scaled object. */
    replicas: Scalars["Int"];
    /** label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors */
    selector?: Maybe<Scalars["String"]>;
};

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export type V1Scheduling = {
    __typename?: "V1Scheduling";
    /** nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission. */
    nodeSelector?: Maybe<Scalars["JSON"]>;
    /** tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass. */
    tolerations?: Maybe<Array<Maybe<V1Toleration>>>;
};

/** A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export type V1ScopeSelector = {
    __typename?: "V1ScopeSelector";
    /** A list of scope selector requirements by scope of the resources. */
    matchExpressions?: Maybe<Array<Maybe<V1ScopedResourceSelectorRequirement>>>;
};

/** A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export type V1ScopedResourceSelectorRequirement = {
    __typename?: "V1ScopedResourceSelectorRequirement";
    /** Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. */
    operator: Scalars["String"];
    /** The name of the scope that the selector applies to. */
    scopeName: Scalars["String"];
    /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
    values?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export type V1SeccompProfile = {
    __typename?: "V1SeccompProfile";
    /** localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
    localhostProfile?: Maybe<Scalars["String"]>;
    /**
     * type indicates which kind of seccomp profile will be applied. Valid options are:
     *
     * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
     */
    type: Scalars["String"];
};

/** Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
export type V1Secret = {
    __typename?: "V1Secret";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4 */
    data?: Maybe<Scalars["JSON"]>;
    /** Immutable, if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil. */
    immutable?: Maybe<Scalars["Boolean"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** stringData allows specifying non-binary secret data in string form. It is provided as a write-only input field for convenience. All keys and values are merged into the data field on write, overwriting any existing values. The stringData field is never output when reading from the API. */
    stringData?: Maybe<Scalars["JSON"]>;
    /** Used to facilitate programmatic handling of secret data. */
    type?: Maybe<Scalars["String"]>;
};

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export type V1SecretEnvSource = {
    __typename?: "V1SecretEnvSource";
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the Secret must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/** SecretKeySelector selects a key of a Secret. */
export type V1SecretKeySelector = {
    __typename?: "V1SecretKeySelector";
    /** The key of the secret to select from.  Must be a valid secret key. */
    key: Scalars["String"];
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the Secret or its key must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/** SecretList is a list of Secret. */
export type V1SecretList = {
    __typename?: "V1SecretList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret */
    items: Array<Maybe<V1Secret>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export type V1SecretProjection = {
    __typename?: "V1SecretProjection";
    /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
    items?: Maybe<Array<Maybe<V1KeyToPath>>>;
    /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name?: Maybe<Scalars["String"]>;
    /** Specify whether the Secret or its key must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
};

/** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
export type V1SecretReference = {
    __typename?: "V1SecretReference";
    /** Name is unique within a namespace to reference a secret resource. */
    name?: Maybe<Scalars["String"]>;
    /** Namespace defines the space within which the secret name must be unique. */
    namespace?: Maybe<Scalars["String"]>;
};

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export type V1SecretVolumeSource = {
    __typename?: "V1SecretVolumeSource";
    /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
    defaultMode?: Maybe<Scalars["Int"]>;
    /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
    items?: Maybe<Array<Maybe<V1KeyToPath>>>;
    /** Specify whether the Secret or its keys must be defined */
    optional?: Maybe<Scalars["Boolean"]>;
    /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
    secretName?: Maybe<Scalars["String"]>;
};

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export type V1SecurityContext = {
    __typename?: "V1SecurityContext";
    /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
    allowPrivilegeEscalation?: Maybe<Scalars["Boolean"]>;
    /** Adds and removes POSIX capabilities from running containers. */
    capabilities?: Maybe<V1Capabilities>;
    /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
    privileged?: Maybe<Scalars["Boolean"]>;
    /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. */
    procMount?: Maybe<Scalars["String"]>;
    /** Whether this container has a read-only root filesystem. Default is false. */
    readOnlyRootFilesystem?: Maybe<Scalars["Boolean"]>;
    /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
    runAsGroup?: Maybe<Scalars["Float"]>;
    /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
    runAsNonRoot?: Maybe<Scalars["Boolean"]>;
    /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
    runAsUser?: Maybe<Scalars["Float"]>;
    /** SELinuxOptions are the labels to be applied to the container */
    seLinuxOptions?: Maybe<V1SeLinuxOptions>;
    /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
    seccompProfile?: Maybe<V1SeccompProfile>;
    /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
    windowsOptions?: Maybe<V1WindowsSecurityContextOptions>;
};

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export type V1SelfSubjectAccessReview = {
    __typename?: "V1SelfSubjectAccessReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
    spec: V1SelfSubjectAccessReviewSpec;
    /** SubjectAccessReviewStatus */
    status?: Maybe<V1SubjectAccessReviewStatus>;
};

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type V1SelfSubjectAccessReviewSpec = {
    __typename?: "V1SelfSubjectAccessReviewSpec";
    /** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
    nonResourceAttributes?: Maybe<V1NonResourceAttributes>;
    /** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
    resourceAttributes?: Maybe<V1ResourceAttributes>;
};

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export type V1SelfSubjectRulesReview = {
    __typename?: "V1SelfSubjectRulesReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    spec: V1SelfSubjectRulesReviewSpec;
    /** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
    status?: Maybe<V1SubjectRulesReviewStatus>;
};

export type V1SelfSubjectRulesReviewSpec = {
    __typename?: "V1SelfSubjectRulesReviewSpec";
    /** Namespace to evaluate rules for. Required. */
    namespace?: Maybe<Scalars["String"]>;
};

/** ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export type V1ServerAddressByClientCidr = {
    __typename?: "V1ServerAddressByClientCIDR";
    /** The CIDR with which clients can match their IP to figure out the server address that they should use. */
    clientCIDR: Scalars["String"];
    /** Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port. */
    serverAddress: Scalars["String"];
};

/** Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export type V1Service = {
    __typename?: "V1Service";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ServiceSpec describes the attributes that a user creates on a service. */
    spec?: Maybe<V1ServiceSpec>;
    /** ServiceStatus represents the current status of a service. */
    status?: Maybe<V1ServiceStatus>;
};

/** ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export type V1ServiceAccount = {
    __typename?: "V1ServiceAccount";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level. */
    automountServiceAccountToken?: Maybe<Scalars["Boolean"]>;
    /** ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod */
    imagePullSecrets?: Maybe<Array<Maybe<V1LocalObjectReference>>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret */
    secrets?: Maybe<Array<Maybe<V1ObjectReference>>>;
};

/** ServiceAccountList is a list of ServiceAccount objects */
export type V1ServiceAccountList = {
    __typename?: "V1ServiceAccountList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
    items: Array<Maybe<V1ServiceAccount>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export type V1ServiceAccountTokenProjection = {
    __typename?: "V1ServiceAccountTokenProjection";
    /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
    audience?: Maybe<Scalars["String"]>;
    /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
    expirationSeconds?: Maybe<Scalars["Float"]>;
    /** Path is the path relative to the mount point of the file to project the token into. */
    path: Scalars["String"];
};

/** ServiceBackendPort is the service port being referenced. */
export type V1ServiceBackendPort = {
    __typename?: "V1ServiceBackendPort";
    /** Name is the name of the port on the Service. This is a mutually exclusive setting with "Number". */
    name?: Maybe<Scalars["String"]>;
    /** Number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name". */
    number?: Maybe<Scalars["Int"]>;
};

/** ServiceList holds a list of services. */
export type V1ServiceList = {
    __typename?: "V1ServiceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of services */
    items: Array<Maybe<V1Service>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ServicePort contains information on service's port. */
export type V1ServicePort = {
    __typename?: "V1ServicePort";
    /** The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol. This is a beta field that is guarded by the ServiceAppProtocol feature gate and enabled by default. */
    appProtocol?: Maybe<Scalars["String"]>;
    /** The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service. */
    name?: Maybe<Scalars["String"]>;
    /** The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport */
    nodePort?: Maybe<Scalars["Int"]>;
    /** The port that will be exposed by this service. */
    port: Scalars["Int"];
    /** The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP. */
    protocol?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    targetPort?: Maybe<Scalars["String"]>;
};

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type V1ServiceReference = {
    __typename?: "V1ServiceReference";
    /** Name is the name of the service */
    name: Scalars["String"];
    /** Namespace is the namespace of the service */
    namespace: Scalars["String"];
    /** path is an optional URL path at which the webhook will be contacted. */
    path?: Maybe<Scalars["String"]>;
    /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
    port?: Maybe<Scalars["Int"]>;
};

/** ServiceSpec describes the attributes that a user creates on a service. */
export type V1ServiceSpec = {
    __typename?: "V1ServiceSpec";
    /** allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts. allocateLoadBalancerNodePorts may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type. This field is alpha-level and is only honored by servers that enable the ServiceLBNodePortControl feature. */
    allocateLoadBalancerNodePorts?: Maybe<Scalars["Boolean"]>;
    /** clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies */
    clusterIP?: Maybe<Scalars["String"]>;
    /**
     * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
     *
     * Unless the "IPv6DualStack" feature gate is enabled, this field is limited to one value, which must be the same as the clusterIP field.  If the feature gate is enabled, this field may hold a maximum of two entries (dual-stack IPs, in either order).  These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     */
    clusterIPs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system. */
    externalIPs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName". */
    externalName?: Maybe<Scalars["String"]>;
    /** externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. */
    externalTrafficPolicy?: Maybe<Scalars["String"]>;
    /** healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). */
    healthCheckNodePort?: Maybe<Scalars["Int"]>;
    /** InternalTrafficPolicy specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. "Cluster" routes internal traffic to a Service to all endpoints. "Local" routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is "Cluster". */
    internalTrafficPolicy?: Maybe<Scalars["String"]>;
    /**
     * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service, and is gated by the "IPv6DualStack" feature gate.  This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail.  This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.  Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services.  This field will be wiped when updating a Service to type ExternalName.
     *
     * This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
     */
    ipFamilies?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** IPFamilyPolicy represents the dual-stack-ness requested or required by this Service, and is gated by the "IPv6DualStack" feature gate.  If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.  This field will be wiped when updating a service to type ExternalName. */
    ipFamilyPolicy?: Maybe<Scalars["String"]>;
    /** loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type. */
    loadBalancerClass?: Maybe<Scalars["String"]>;
    /** Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. */
    loadBalancerIP?: Maybe<Scalars["String"]>;
    /** If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/ */
    loadBalancerSourceRanges?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies */
    ports?: Maybe<Array<Maybe<V1ServicePort>>>;
    /** publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior. */
    publishNotReadyAddresses?: Maybe<Scalars["Boolean"]>;
    /** Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/ */
    selector?: Maybe<Scalars["JSON"]>;
    /** Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies */
    sessionAffinity?: Maybe<Scalars["String"]>;
    /** SessionAffinityConfig represents the configurations of session affinity. */
    sessionAffinityConfig?: Maybe<V1SessionAffinityConfig>;
    /** topologyKeys is a preference-order list of topology keys which implementations of services should use to preferentially sort endpoints when accessing this Service, it can not be used at the same time as externalTrafficPolicy=Local. Topology keys must be valid label keys and at most 16 keys may be specified. Endpoints are chosen based on the first topology key with available backends. If this field is specified and all entries have no backends that match the topology of the client, the service has no backends for that client and connections should fail. The special value "*" may be used to mean "any topology". This catch-all value, if used, only makes sense as the last value in the list. If this is not specified or empty, no topology constraints will be applied. This field is alpha-level and is only honored by servers that enable the ServiceTopology feature. This field is deprecated and will be removed in a future version. */
    topologyKeys?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types */
    type?: Maybe<Scalars["String"]>;
};

/** ServiceStatus represents the current status of a service. */
export type V1ServiceStatus = {
    __typename?: "V1ServiceStatus";
    /** Current service state */
    conditions?: Maybe<Array<Maybe<V1Condition>>>;
    /** LoadBalancerStatus represents the status of a load-balancer. */
    loadBalancer?: Maybe<V1LoadBalancerStatus>;
};

/** SessionAffinityConfig represents the configurations of session affinity. */
export type V1SessionAffinityConfig = {
    __typename?: "V1SessionAffinityConfig";
    /** ClientIPConfig represents the configurations of Client IP based session affinity. */
    clientIP?: Maybe<V1ClientIpConfig>;
};

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export type V1StatefulSet = {
    __typename?: "V1StatefulSet";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** A StatefulSetSpec is the specification of a StatefulSet. */
    spec?: Maybe<V1StatefulSetSpec>;
    /** StatefulSetStatus represents the current state of a StatefulSet. */
    status?: Maybe<V1StatefulSetStatus>;
};

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export type V1StatefulSetCondition = {
    __typename?: "V1StatefulSetCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** A human readable message indicating details about the transition. */
    message?: Maybe<Scalars["String"]>;
    /** The reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of statefulset condition. */
    type: Scalars["String"];
};

/** StatefulSetList is a collection of StatefulSets. */
export type V1StatefulSetList = {
    __typename?: "V1StatefulSetList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    items: Array<Maybe<V1StatefulSet>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** A StatefulSetSpec is the specification of a StatefulSet. */
export type V1StatefulSetSpec = {
    __typename?: "V1StatefulSetSpec";
    /** podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once. */
    podManagementPolicy?: Maybe<Scalars["String"]>;
    /** replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. */
    replicas?: Maybe<Scalars["Int"]>;
    /** revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. */
    revisionHistoryLimit?: Maybe<Scalars["Int"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector: V1LabelSelector;
    /** serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller. */
    serviceName: Scalars["String"];
    /** PodTemplateSpec describes the data a pod should have when created from a template */
    template: V1PodTemplateSpec;
    /** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
    updateStrategy?: Maybe<V1StatefulSetUpdateStrategy>;
    /** volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
    volumeClaimTemplates?: Maybe<Array<Maybe<V1PersistentVolumeClaim>>>;
};

/** StatefulSetStatus represents the current state of a StatefulSet. */
export type V1StatefulSetStatus = {
    __typename?: "V1StatefulSetStatus";
    /** collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
    collisionCount?: Maybe<Scalars["Int"]>;
    /** Represents the latest available observations of a statefulset's current state. */
    conditions?: Maybe<Array<Maybe<V1StatefulSetCondition>>>;
    /** currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. */
    currentReplicas?: Maybe<Scalars["Int"]>;
    /** currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
    currentRevision?: Maybe<Scalars["String"]>;
    /** observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition. */
    readyReplicas?: Maybe<Scalars["Int"]>;
    /** replicas is the number of Pods created by the StatefulSet controller. */
    replicas: Scalars["Int"];
    /** updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
    updateRevision?: Maybe<Scalars["String"]>;
    /** updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. */
    updatedReplicas?: Maybe<Scalars["Int"]>;
};

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export type V1StatefulSetUpdateStrategy = {
    __typename?: "V1StatefulSetUpdateStrategy";
    /** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
    rollingUpdate?: Maybe<V1RollingUpdateStatefulSetStrategy>;
    /** Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate. */
    type?: Maybe<Scalars["String"]>;
};

/** Status is a return value for calls that don't return other objects. */
export type V1Status = {
    __typename?: "V1Status";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Suggested HTTP return code for this status, 0 if not set. */
    code?: Maybe<Scalars["Int"]>;
    /** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
    details?: Maybe<V1StatusDetails>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** A human-readable description of the status of this operation. */
    message?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
    /** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
    status?: Maybe<Scalars["String"]>;
};

/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export type V1StatusCause = {
    __typename?: "V1StatusCause";
    /**
     * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
     *
     * Examples:
     *   "name" - the field "name" on the current resource
     *   "items[0].name" - the field "name" on the first array entry in "items"
     */
    field?: Maybe<Scalars["String"]>;
    /** A human-readable description of the cause of the error.  This field may be presented as-is to a reader. */
    message?: Maybe<Scalars["String"]>;
    /** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
    reason?: Maybe<Scalars["String"]>;
};

/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export type V1StatusDetails = {
    __typename?: "V1StatusDetails";
    /** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
    causes?: Maybe<Array<Maybe<V1StatusCause>>>;
    /** The group attribute of the resource associated with the status StatusReason. */
    group?: Maybe<Scalars["String"]>;
    /** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
    name?: Maybe<Scalars["String"]>;
    /** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
    retryAfterSeconds?: Maybe<Scalars["Int"]>;
    /** UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
    uid?: Maybe<Scalars["String"]>;
};

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export type V1StorageClass = {
    __typename?: "V1StorageClass";
    /** AllowVolumeExpansion shows whether the storage class allow volume expand */
    allowVolumeExpansion?: Maybe<Scalars["Boolean"]>;
    /** Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature. */
    allowedTopologies?: Maybe<Array<Maybe<V1TopologySelectorTerm>>>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid. */
    mountOptions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Parameters holds the parameters for the provisioner that should create volumes of this storage class. */
    parameters?: Maybe<Scalars["JSON"]>;
    /** Provisioner indicates the type of the provisioner. */
    provisioner: Scalars["String"];
    /** Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete. */
    reclaimPolicy?: Maybe<Scalars["String"]>;
    /** VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature. */
    volumeBindingMode?: Maybe<Scalars["String"]>;
};

/** StorageClassList is a collection of storage classes. */
export type V1StorageClassList = {
    __typename?: "V1StorageClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of StorageClasses */
    items: Array<Maybe<V1StorageClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Represents a StorageOS persistent volume resource. */
export type V1StorageOsPersistentVolumeSource = {
    __typename?: "V1StorageOSPersistentVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    secretRef?: Maybe<V1ObjectReference>;
    /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
    volumeName?: Maybe<Scalars["String"]>;
    /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
    volumeNamespace?: Maybe<Scalars["String"]>;
};

/** Represents a StorageOS persistent volume resource. */
export type V1StorageOsVolumeSource = {
    __typename?: "V1StorageOSVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    secretRef?: Maybe<V1LocalObjectReference>;
    /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
    volumeName?: Maybe<Scalars["String"]>;
    /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
    volumeNamespace?: Maybe<Scalars["String"]>;
};

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export type V1Subject = {
    __typename?: "V1Subject";
    /** APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
    apiGroup?: Maybe<Scalars["String"]>;
    /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
    kind: Scalars["String"];
    /** Name of the object being referenced. */
    name: Scalars["String"];
    /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
    namespace?: Maybe<Scalars["String"]>;
};

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export type V1SubjectAccessReview = {
    __typename?: "V1SubjectAccessReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
    spec: V1SubjectAccessReviewSpec;
    /** SubjectAccessReviewStatus */
    status?: Maybe<V1SubjectAccessReviewStatus>;
};

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type V1SubjectAccessReviewSpec = {
    __typename?: "V1SubjectAccessReviewSpec";
    /** Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. */
    extra?: Maybe<Scalars["JSON"]>;
    /** Groups is the groups you're testing for. */
    groups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
    nonResourceAttributes?: Maybe<V1NonResourceAttributes>;
    /** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
    resourceAttributes?: Maybe<V1ResourceAttributes>;
    /** UID information about the requesting user. */
    uid?: Maybe<Scalars["String"]>;
    /** User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups */
    user?: Maybe<Scalars["String"]>;
};

/** SubjectAccessReviewStatus */
export type V1SubjectAccessReviewStatus = {
    __typename?: "V1SubjectAccessReviewStatus";
    /** Allowed is required. True if the action would be allowed, false otherwise. */
    allowed: Scalars["Boolean"];
    /** Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true. */
    denied?: Maybe<Scalars["Boolean"]>;
    /** EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request. */
    evaluationError?: Maybe<Scalars["String"]>;
    /** Reason is optional.  It indicates why a request was allowed or denied. */
    reason?: Maybe<Scalars["String"]>;
};

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export type V1SubjectRulesReviewStatus = {
    __typename?: "V1SubjectRulesReviewStatus";
    /** EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete. */
    evaluationError?: Maybe<Scalars["String"]>;
    /** Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation. */
    incomplete: Scalars["Boolean"];
    /** NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
    nonResourceRules: Array<Maybe<V1NonResourceRule>>;
    /** ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
    resourceRules: Array<Maybe<V1ResourceRule>>;
};

/** Sysctl defines a kernel parameter to be set */
export type V1Sysctl = {
    __typename?: "V1Sysctl";
    /** Name of a property to set */
    name: Scalars["String"];
    /** Value of a property to set */
    value: Scalars["String"];
};

/** TCPSocketAction describes an action based on opening a socket */
export type V1TcpSocketAction = {
    __typename?: "V1TCPSocketAction";
    /** Optional: Host name to connect to, defaults to the pod IP. */
    host?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    port: Scalars["String"];
};

/** The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export type V1Taint = {
    __typename?: "V1Taint";
    /** Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute. */
    effect: Scalars["String"];
    /** Required. The taint key to be applied to a node. */
    key: Scalars["String"];
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    timeAdded?: Maybe<Scalars["String"]>;
    /** The taint value corresponding to the taint key. */
    value?: Maybe<Scalars["String"]>;
};

/** TokenRequest requests a token for a given service account. */
export type V1TokenRequest = {
    __typename?: "V1TokenRequest";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver. */
    audience: Scalars["String"];
    /** ExpirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec". */
    expirationSeconds?: Maybe<Scalars["Float"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** TokenRequestSpec contains client provided parameters of a token request. */
    spec: V1TokenRequestSpec;
    /** TokenRequestStatus is the result of a token request. */
    status?: Maybe<V1TokenRequestStatus>;
};

/** TokenRequestSpec contains client provided parameters of a token request. */
export type V1TokenRequestSpec = {
    __typename?: "V1TokenRequestSpec";
    /** Audiences are the intendend audiences of the token. A recipient of a token must identitfy themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences. */
    audiences: Array<Maybe<Scalars["String"]>>;
    /** BoundObjectReference is a reference to an object that a token is bound to. */
    boundObjectRef?: Maybe<V1BoundObjectReference>;
    /** ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response. */
    expirationSeconds?: Maybe<Scalars["Float"]>;
};

/** TokenRequestStatus is the result of a token request. */
export type V1TokenRequestStatus = {
    __typename?: "V1TokenRequestStatus";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    expirationTimestamp: Scalars["String"];
    /** Token is the opaque bearer token. */
    token: Scalars["String"];
};

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export type V1TokenReview = {
    __typename?: "V1TokenReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** TokenReviewSpec is a description of the token authentication request. */
    spec: V1TokenReviewSpec;
    /** TokenReviewStatus is the result of the token authentication request. */
    status?: Maybe<V1TokenReviewStatus>;
};

/** TokenReviewSpec is a description of the token authentication request. */
export type V1TokenReviewSpec = {
    __typename?: "V1TokenReviewSpec";
    /** Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver. */
    audiences?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Token is the opaque bearer token. */
    token?: Maybe<Scalars["String"]>;
};

/** TokenReviewStatus is the result of the token authentication request. */
export type V1TokenReviewStatus = {
    __typename?: "V1TokenReviewStatus";
    /** Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server. */
    audiences?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Authenticated indicates that the token was associated with a known user. */
    authenticated?: Maybe<Scalars["Boolean"]>;
    /** Error indicates that the token couldn't be checked */
    error?: Maybe<Scalars["String"]>;
    /** UserInfo holds the information about the user needed to implement the user.Info interface. */
    user?: Maybe<V1UserInfo>;
};

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export type V1Toleration = {
    __typename?: "V1Toleration";
    /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
    effect?: Maybe<Scalars["String"]>;
    /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
    key?: Maybe<Scalars["String"]>;
    /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
    operator?: Maybe<Scalars["String"]>;
    /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
    tolerationSeconds?: Maybe<Scalars["Float"]>;
    /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
    value?: Maybe<Scalars["String"]>;
};

/** A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export type V1TopologySelectorLabelRequirement = {
    __typename?: "V1TopologySelectorLabelRequirement";
    /** The label key that the selector applies to. */
    key: Scalars["String"];
    /** An array of string values. One value must match the label to be selected. Each entry in Values is ORed. */
    values: Array<Maybe<Scalars["String"]>>;
};

/** A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export type V1TopologySelectorTerm = {
    __typename?: "V1TopologySelectorTerm";
    /** A list of topology selector requirements by labels. */
    matchLabelExpressions?: Maybe<
        Array<Maybe<V1TopologySelectorLabelRequirement>>
    >;
};

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export type V1TopologySpreadConstraint = {
    __typename?: "V1TopologySpreadConstraint";
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    labelSelector?: Maybe<V1LabelSelector>;
    /** MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed. */
    maxSkew: Scalars["Int"];
    /** TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field. */
    topologyKey: Scalars["String"];
    /**
     * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,
     *   but giving higher precedence to topologies that would help reduce the
     *   skew.
     * A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assigment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
     */
    whenUnsatisfiable: Scalars["String"];
};

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export type V1TypedLocalObjectReference = {
    __typename?: "V1TypedLocalObjectReference";
    /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
    apiGroup?: Maybe<Scalars["String"]>;
    /** Kind is the type of resource being referenced */
    kind: Scalars["String"];
    /** Name is the name of resource being referenced */
    name: Scalars["String"];
};

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export type V1UserInfo = {
    __typename?: "V1UserInfo";
    /** Any additional information provided by the authenticator. */
    extra?: Maybe<Scalars["JSON"]>;
    /** The names of groups this user is a part of. */
    groups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs. */
    uid?: Maybe<Scalars["String"]>;
    /** The name that uniquely identifies this user among all active users. */
    username?: Maybe<Scalars["String"]>;
};

/** ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export type V1ValidatingWebhook = {
    __typename?: "V1ValidatingWebhook";
    /** AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. */
    admissionReviewVersions: Array<Maybe<Scalars["String"]>>;
    /** WebhookClientConfig contains the information to make a TLS connection with the webhook */
    clientConfig: V1WebhookClientConfig;
    /** FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail. */
    failurePolicy?: Maybe<Scalars["String"]>;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     *
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
     *
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
     *
     * Defaults to "Equivalent"
     */
    matchPolicy?: Maybe<Scalars["String"]>;
    /** The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required. */
    name: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    namespaceSelector?: Maybe<V1LabelSelector>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    objectSelector?: Maybe<V1LabelSelector>;
    /** Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. */
    rules?: Maybe<Array<Maybe<V1RuleWithOperations>>>;
    /** SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. */
    sideEffects: Scalars["String"];
    /** TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds. */
    timeoutSeconds?: Maybe<Scalars["Int"]>;
};

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. */
export type V1ValidatingWebhookConfiguration = {
    __typename?: "V1ValidatingWebhookConfiguration";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Webhooks is a list of webhooks and the affected resources and operations. */
    webhooks?: Maybe<Array<Maybe<V1ValidatingWebhook>>>;
};

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export type V1ValidatingWebhookConfigurationList = {
    __typename?: "V1ValidatingWebhookConfigurationList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of ValidatingWebhookConfiguration. */
    items: Array<Maybe<V1ValidatingWebhookConfiguration>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export type V1Volume = {
    __typename?: "V1Volume";
    /**
     * Represents a Persistent Disk resource in AWS.
     *
     * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
     */
    awsElasticBlockStore?: Maybe<V1AwsElasticBlockStoreVolumeSource>;
    /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
    azureDisk?: Maybe<V1AzureDiskVolumeSource>;
    /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
    azureFile?: Maybe<V1AzureFileVolumeSource>;
    /** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
    cephfs?: Maybe<V1CephFsVolumeSource>;
    /** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
    cinder?: Maybe<V1CinderVolumeSource>;
    /**
     * Adapts a ConfigMap into a volume.
     *
     * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
     */
    configMap?: Maybe<V1ConfigMapVolumeSource>;
    /** Represents a source location of a volume to mount, managed by an external CSI driver */
    csi?: Maybe<V1CsiVolumeSource>;
    /** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
    downwardAPI?: Maybe<V1DownwardApiVolumeSource>;
    /** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
    emptyDir?: Maybe<V1EmptyDirVolumeSource>;
    /** Represents an ephemeral volume that is handled by a normal storage driver. */
    ephemeral?: Maybe<V1EphemeralVolumeSource>;
    /** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
    fc?: Maybe<V1FcVolumeSource>;
    /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
    flexVolume?: Maybe<V1FlexVolumeSource>;
    /** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
    flocker?: Maybe<V1FlockerVolumeSource>;
    /**
     * Represents a Persistent Disk resource in Google Compute Engine.
     *
     * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
     */
    gcePersistentDisk?: Maybe<V1GcePersistentDiskVolumeSource>;
    /**
     * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
     *
     * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
     */
    gitRepo?: Maybe<V1GitRepoVolumeSource>;
    /** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
    glusterfs?: Maybe<V1GlusterfsVolumeSource>;
    /** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
    hostPath?: Maybe<V1HostPathVolumeSource>;
    /** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
    iscsi?: Maybe<V1IscsiVolumeSource>;
    /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
    name: Scalars["String"];
    /** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
    nfs?: Maybe<V1NfsVolumeSource>;
    /** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
    persistentVolumeClaim?: Maybe<V1PersistentVolumeClaimVolumeSource>;
    /** Represents a Photon Controller persistent disk resource. */
    photonPersistentDisk?: Maybe<V1PhotonPersistentDiskVolumeSource>;
    /** PortworxVolumeSource represents a Portworx volume resource. */
    portworxVolume?: Maybe<V1PortworxVolumeSource>;
    /** Represents a projected volume source */
    projected?: Maybe<V1ProjectedVolumeSource>;
    /** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
    quobyte?: Maybe<V1QuobyteVolumeSource>;
    /** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
    rbd?: Maybe<V1RbdVolumeSource>;
    /** ScaleIOVolumeSource represents a persistent ScaleIO volume */
    scaleIO?: Maybe<V1ScaleIoVolumeSource>;
    /**
     * Adapts a Secret into a volume.
     *
     * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
     */
    secret?: Maybe<V1SecretVolumeSource>;
    /** Represents a StorageOS persistent volume resource. */
    storageos?: Maybe<V1StorageOsVolumeSource>;
    /** Represents a vSphere volume resource. */
    vsphereVolume?: Maybe<V1VsphereVirtualDiskVolumeSource>;
};

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export type V1VolumeAttachment = {
    __typename?: "V1VolumeAttachment";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
    spec: V1VolumeAttachmentSpec;
    /** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
    status?: Maybe<V1VolumeAttachmentStatus>;
};

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export type V1VolumeAttachmentList = {
    __typename?: "V1VolumeAttachmentList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of VolumeAttachments */
    items: Array<Maybe<V1VolumeAttachment>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export type V1VolumeAttachmentSource = {
    __typename?: "V1VolumeAttachmentSource";
    /** PersistentVolumeSpec is the specification of a persistent volume. */
    inlineVolumeSpec?: Maybe<V1PersistentVolumeSpec>;
    /** Name of the persistent volume to attach. */
    persistentVolumeName?: Maybe<Scalars["String"]>;
};

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export type V1VolumeAttachmentSpec = {
    __typename?: "V1VolumeAttachmentSpec";
    /** Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). */
    attacher: Scalars["String"];
    /** The node that the volume should be attached to. */
    nodeName: Scalars["String"];
    /** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
    source: V1VolumeAttachmentSource;
};

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export type V1VolumeAttachmentStatus = {
    __typename?: "V1VolumeAttachmentStatus";
    /** VolumeError captures an error encountered during a volume operation. */
    attachError?: Maybe<V1VolumeError>;
    /** Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
    attached: Scalars["Boolean"];
    /** Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
    attachmentMetadata?: Maybe<Scalars["JSON"]>;
    /** VolumeError captures an error encountered during a volume operation. */
    detachError?: Maybe<V1VolumeError>;
};

/** volumeDevice describes a mapping of a raw block device within a container. */
export type V1VolumeDevice = {
    __typename?: "V1VolumeDevice";
    /** devicePath is the path inside of the container that the device will be mapped to. */
    devicePath: Scalars["String"];
    /** name must match the name of a persistentVolumeClaim in the pod */
    name: Scalars["String"];
};

/** VolumeError captures an error encountered during a volume operation. */
export type V1VolumeError = {
    __typename?: "V1VolumeError";
    /** String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information. */
    message?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    time?: Maybe<Scalars["String"]>;
};

/** VolumeMount describes a mounting of a Volume within a container. */
export type V1VolumeMount = {
    __typename?: "V1VolumeMount";
    /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
    mountPath: Scalars["String"];
    /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
    mountPropagation?: Maybe<Scalars["String"]>;
    /** This must match the Name of a Volume. */
    name: Scalars["String"];
    /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
    readOnly?: Maybe<Scalars["Boolean"]>;
    /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
    subPath?: Maybe<Scalars["String"]>;
    /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
    subPathExpr?: Maybe<Scalars["String"]>;
};

/** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export type V1VolumeNodeAffinity = {
    __typename?: "V1VolumeNodeAffinity";
    /** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
    required?: Maybe<V1NodeSelector>;
};

/** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export type V1VolumeNodeResources = {
    __typename?: "V1VolumeNodeResources";
    /** Maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded. */
    count?: Maybe<Scalars["Int"]>;
};

/** Projection that may be projected along with other supported volume types */
export type V1VolumeProjection = {
    __typename?: "V1VolumeProjection";
    /**
     * Adapts a ConfigMap into a projected volume.
     *
     * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
     */
    configMap?: Maybe<V1ConfigMapProjection>;
    /** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
    downwardAPI?: Maybe<V1DownwardApiProjection>;
    /**
     * Adapts a secret into a projected volume.
     *
     * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
     */
    secret?: Maybe<V1SecretProjection>;
    /** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
    serviceAccountToken?: Maybe<V1ServiceAccountTokenProjection>;
};

/** Represents a vSphere volume resource. */
export type V1VsphereVirtualDiskVolumeSource = {
    __typename?: "V1VsphereVirtualDiskVolumeSource";
    /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
    fsType?: Maybe<Scalars["String"]>;
    /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
    storagePolicyID?: Maybe<Scalars["String"]>;
    /** Storage Policy Based Management (SPBM) profile name. */
    storagePolicyName?: Maybe<Scalars["String"]>;
    /** Path that identifies vSphere volume vmdk */
    volumePath: Scalars["String"];
};

/** Event represents a single event to a watched resource. */
export type V1WatchEvent = {
    __typename?: "V1WatchEvent";
    /**
     * RawExtension is used to hold extensions in external versions.
     *
     * To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
     *
     * // Internal package: type MyAPIObject struct {
     * 	runtime.TypeMeta `json:",inline"`
     * 	MyPlugin runtime.Object `json:"myPlugin"`
     * } type PluginA struct {
     * 	AOption string `json:"aOption"`
     * }
     *
     * // External package: type MyAPIObject struct {
     * 	runtime.TypeMeta `json:",inline"`
     * 	MyPlugin runtime.RawExtension `json:"myPlugin"`
     * } type PluginA struct {
     * 	AOption string `json:"aOption"`
     * }
     *
     * // On the wire, the JSON will look something like this: {
     * 	"kind":"MyAPIObject",
     * 	"apiVersion":"v1",
     * 	"myPlugin": {
     * 		"kind":"PluginA",
     * 		"aOption":"foo",
     * 	},
     * }
     *
     * So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
     */
    object: Scalars["JSON"];
    type: Scalars["String"];
};

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
export type V1WebhookClientConfig = {
    __typename?: "V1WebhookClientConfig";
    /** caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used. */
    caBundle?: Maybe<Scalars["String"]>;
    /** ServiceReference holds a reference to Service.legacy.k8s.io */
    service?: Maybe<V1ServiceReference>;
    /**
     * url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
     *
     * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
     *
     * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
     *
     * The scheme must be "https"; the URL must begin with "https://".
     *
     * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
     *
     * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
     */
    url?: Maybe<Scalars["String"]>;
};

/** WebhookConversion describes how to call a conversion webhook */
export type V1WebhookConversion = {
    __typename?: "V1WebhookConversion";
    /** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
    clientConfig?: Maybe<V1WebhookClientConfig>;
    /** conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. */
    conversionReviewVersions: Array<Maybe<Scalars["String"]>>;
};

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export type V1WeightedPodAffinityTerm = {
    __typename?: "V1WeightedPodAffinityTerm";
    /** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
    podAffinityTerm: V1PodAffinityTerm;
    /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
    weight: Scalars["Int"];
};

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export type V1WindowsSecurityContextOptions = {
    __typename?: "V1WindowsSecurityContextOptions";
    /** GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
    gmsaCredentialSpec?: Maybe<Scalars["String"]>;
    /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
    gmsaCredentialSpecName?: Maybe<Scalars["String"]>;
    /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
    runAsUserName?: Maybe<Scalars["String"]>;
};

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export type V1alpha1AggregationRule = {
    __typename?: "V1alpha1AggregationRule";
    /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
    clusterRoleSelectors?: Maybe<Array<Maybe<V1LabelSelector>>>;
};

/**
 * CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.
 *
 * For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"
 *
 * The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero
 *
 * The producer of these objects can decide which approach is more suitable.
 *
 * They are consumed by the kube-scheduler if the CSIStorageCapacity beta feature gate is enabled there and a CSI driver opts into capacity-aware scheduling with CSIDriver.StorageCapacity.
 */
export type V1alpha1CsiStorageCapacity = {
    __typename?: "V1alpha1CSIStorageCapacity";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    capacity?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    maximumVolumeSize?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    nodeTopology?: Maybe<V1LabelSelector>;
    /** The name of the StorageClass that the reported capacity applies to. It must meet the same requirements as the name of a StorageClass object (non-empty, DNS subdomain). If that object no longer exists, the CSIStorageCapacity object is obsolete and should be removed by its creator. This field is immutable. */
    storageClassName: Scalars["String"];
};

/** CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export type V1alpha1CsiStorageCapacityList = {
    __typename?: "V1alpha1CSIStorageCapacityList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of CSIStorageCapacity objects. */
    items: Array<Maybe<V1alpha1CsiStorageCapacity>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.22. */
export type V1alpha1ClusterRole = {
    __typename?: "V1alpha1ClusterRole";
    /** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
    aggregationRule?: Maybe<V1alpha1AggregationRule>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Rules holds all the PolicyRules for this ClusterRole */
    rules?: Maybe<Array<Maybe<V1alpha1PolicyRule>>>;
};

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.22. */
export type V1alpha1ClusterRoleBinding = {
    __typename?: "V1alpha1ClusterRoleBinding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RoleRef contains information that points to the role being used */
    roleRef: V1alpha1RoleRef;
    /** Subjects holds references to the objects the role applies to. */
    subjects?: Maybe<Array<Maybe<V1alpha1Subject>>>;
};

/** ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindings, and will no longer be served in v1.22. */
export type V1alpha1ClusterRoleBindingList = {
    __typename?: "V1alpha1ClusterRoleBindingList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ClusterRoleBindings */
    items: Array<Maybe<V1alpha1ClusterRoleBinding>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22. */
export type V1alpha1ClusterRoleList = {
    __typename?: "V1alpha1ClusterRoleList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ClusterRoles */
    items: Array<Maybe<V1alpha1ClusterRole>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Overhead structure represents the resource overhead associated with running a pod. */
export type V1alpha1Overhead = {
    __typename?: "V1alpha1Overhead";
    /** PodFixed represents the fixed resource overhead associated with running a pod. */
    podFixed?: Maybe<Scalars["JSON"]>;
};

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export type V1alpha1PolicyRule = {
    __typename?: "V1alpha1PolicyRule";
    /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both. */
    nonResourceURLs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
    resourceNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Resources is a list of resources this rule applies to. '*' represents all resources. */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. '*' represents all verbs. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export type V1alpha1PriorityClass = {
    __typename?: "V1alpha1PriorityClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
    description?: Maybe<Scalars["String"]>;
    /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
    globalDefault?: Maybe<Scalars["Boolean"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
    preemptionPolicy?: Maybe<Scalars["String"]>;
    /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
    value: Scalars["Int"];
};

/** PriorityClassList is a collection of priority classes. */
export type V1alpha1PriorityClassList = {
    __typename?: "V1alpha1PriorityClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of PriorityClasses */
    items: Array<Maybe<V1alpha1PriorityClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.22. */
export type V1alpha1Role = {
    __typename?: "V1alpha1Role";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Rules holds all the PolicyRules for this Role */
    rules?: Maybe<Array<Maybe<V1alpha1PolicyRule>>>;
};

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.22. */
export type V1alpha1RoleBinding = {
    __typename?: "V1alpha1RoleBinding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RoleRef contains information that points to the role being used */
    roleRef: V1alpha1RoleRef;
    /** Subjects holds references to the objects the role applies to. */
    subjects?: Maybe<Array<Maybe<V1alpha1Subject>>>;
};

/** RoleBindingList is a collection of RoleBindings Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBindingList, and will no longer be served in v1.22. */
export type V1alpha1RoleBindingList = {
    __typename?: "V1alpha1RoleBindingList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of RoleBindings */
    items: Array<Maybe<V1alpha1RoleBinding>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RoleList is a collection of Roles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleList, and will no longer be served in v1.22. */
export type V1alpha1RoleList = {
    __typename?: "V1alpha1RoleList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of Roles */
    items: Array<Maybe<V1alpha1Role>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RoleRef contains information that points to the role being used */
export type V1alpha1RoleRef = {
    __typename?: "V1alpha1RoleRef";
    /** APIGroup is the group for the resource being referenced */
    apiGroup: Scalars["String"];
    /** Kind is the type of resource being referenced */
    kind: Scalars["String"];
    /** Name is the name of resource being referenced */
    name: Scalars["String"];
};

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md */
export type V1alpha1RuntimeClass = {
    __typename?: "V1alpha1RuntimeClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable. */
    spec: V1alpha1RuntimeClassSpec;
};

/** RuntimeClassList is a list of RuntimeClass objects. */
export type V1alpha1RuntimeClassList = {
    __typename?: "V1alpha1RuntimeClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of schema objects. */
    items: Array<Maybe<V1alpha1RuntimeClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable. */
export type V1alpha1RuntimeClassSpec = {
    __typename?: "V1alpha1RuntimeClassSpec";
    /** Overhead structure represents the resource overhead associated with running a pod. */
    overhead?: Maybe<V1alpha1Overhead>;
    /** RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable. */
    runtimeHandler: Scalars["String"];
    /** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
    scheduling?: Maybe<V1alpha1Scheduling>;
};

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export type V1alpha1Scheduling = {
    __typename?: "V1alpha1Scheduling";
    /** nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission. */
    nodeSelector?: Maybe<Scalars["JSON"]>;
    /** tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass. */
    tolerations?: Maybe<Array<Maybe<V1Toleration>>>;
};

/** An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend. */
export type V1alpha1ServerStorageVersion = {
    __typename?: "V1alpha1ServerStorageVersion";
    /** The ID of the reporting API server. */
    apiServerID?: Maybe<Scalars["String"]>;
    /** The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions. */
    decodableVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The API server encodes the object to this version when persisting it in the backend (e.g., etcd). */
    encodingVersion?: Maybe<Scalars["String"]>;
};

/** Storage version of a specific resource. */
export type V1alpha1StorageVersion = {
    __typename?: "V1alpha1StorageVersion";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** StorageVersionSpec is an empty spec. */
    spec: Scalars["JSON"];
    /** API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend. */
    status: V1alpha1StorageVersionStatus;
};

/** Describes the state of the storageVersion at a certain point. */
export type V1alpha1StorageVersionCondition = {
    __typename?: "V1alpha1StorageVersionCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** A human readable message indicating details about the transition. */
    message?: Maybe<Scalars["String"]>;
    /** If set, this represents the .metadata.generation that the condition was set based upon. */
    observedGeneration?: Maybe<Scalars["Float"]>;
    /** The reason for the condition's last transition. */
    reason: Scalars["String"];
    /** Status of the condition, one of True, False, Unknown. */
    status: Scalars["String"];
    /** Type of the condition. */
    type: Scalars["String"];
};

/** A list of StorageVersions. */
export type V1alpha1StorageVersionList = {
    __typename?: "V1alpha1StorageVersionList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    items: Array<Maybe<V1alpha1StorageVersion>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend. */
export type V1alpha1StorageVersionStatus = {
    __typename?: "V1alpha1StorageVersionStatus";
    /** If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality. */
    commonEncodingVersion?: Maybe<Scalars["String"]>;
    /** The latest available observations of the storageVersion's state. */
    conditions?: Maybe<Array<Maybe<V1alpha1StorageVersionCondition>>>;
    /** The reported versions per API server instance. */
    storageVersions?: Maybe<Array<Maybe<V1alpha1ServerStorageVersion>>>;
};

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export type V1alpha1Subject = {
    __typename?: "V1alpha1Subject";
    /** APIVersion holds the API group and version of the referenced subject. Defaults to "v1" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io/v1alpha1" for User and Group subjects. */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
    kind: Scalars["String"];
    /** Name of the object being referenced. */
    name: Scalars["String"];
    /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
    namespace?: Maybe<Scalars["String"]>;
};

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export type V1alpha1VolumeAttachment = {
    __typename?: "V1alpha1VolumeAttachment";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
    spec: V1alpha1VolumeAttachmentSpec;
    /** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
    status?: Maybe<V1alpha1VolumeAttachmentStatus>;
};

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export type V1alpha1VolumeAttachmentList = {
    __typename?: "V1alpha1VolumeAttachmentList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of VolumeAttachments */
    items: Array<Maybe<V1alpha1VolumeAttachment>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export type V1alpha1VolumeAttachmentSource = {
    __typename?: "V1alpha1VolumeAttachmentSource";
    /** PersistentVolumeSpec is the specification of a persistent volume. */
    inlineVolumeSpec?: Maybe<V1PersistentVolumeSpec>;
    /** Name of the persistent volume to attach. */
    persistentVolumeName?: Maybe<Scalars["String"]>;
};

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export type V1alpha1VolumeAttachmentSpec = {
    __typename?: "V1alpha1VolumeAttachmentSpec";
    /** Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). */
    attacher: Scalars["String"];
    /** The node that the volume should be attached to. */
    nodeName: Scalars["String"];
    /** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
    source: V1alpha1VolumeAttachmentSource;
};

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export type V1alpha1VolumeAttachmentStatus = {
    __typename?: "V1alpha1VolumeAttachmentStatus";
    /** VolumeError captures an error encountered during a volume operation. */
    attachError?: Maybe<V1alpha1VolumeError>;
    /** Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
    attached: Scalars["Boolean"];
    /** Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
    attachmentMetadata?: Maybe<Scalars["JSON"]>;
    /** VolumeError captures an error encountered during a volume operation. */
    detachError?: Maybe<V1alpha1VolumeError>;
};

/** VolumeError captures an error encountered during a volume operation. */
export type V1alpha1VolumeError = {
    __typename?: "V1alpha1VolumeError";
    /** String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information. */
    message?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    time?: Maybe<Scalars["String"]>;
};

/** APIService represents a server for a particular GroupVersion. Name must be "version.group". */
export type V1beta1ApiService = {
    __typename?: "V1beta1APIService";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
    spec?: Maybe<V1beta1ApiServiceSpec>;
    /** APIServiceStatus contains derived information about an API server */
    status?: Maybe<V1beta1ApiServiceStatus>;
};

/** APIServiceCondition describes the state of an APIService at a particular point */
export type V1beta1ApiServiceCondition = {
    __typename?: "V1beta1APIServiceCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** Unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** Status is the status of the condition. Can be True, False, Unknown. */
    status: Scalars["String"];
    /** Type is the type of the condition. */
    type: Scalars["String"];
};

/** APIServiceList is a list of APIService objects. */
export type V1beta1ApiServiceList = {
    __typename?: "V1beta1APIServiceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    items: Array<Maybe<V1beta1ApiService>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
export type V1beta1ApiServiceSpec = {
    __typename?: "V1beta1APIServiceSpec";
    /** CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used. */
    caBundle?: Maybe<Scalars["String"]>;
    /** Group is the API group name this server hosts */
    group?: Maybe<Scalars["String"]>;
    /** GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s */
    groupPriorityMinimum: Scalars["Int"];
    /** InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead. */
    insecureSkipTLSVerify?: Maybe<Scalars["Boolean"]>;
    /** ServiceReference holds a reference to Service.legacy.k8s.io */
    service?: Maybe<V1beta1ServiceReference>;
    /** Version is the API version this server hosts.  For example, "v1" */
    version?: Maybe<Scalars["String"]>;
    /** VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    versionPriority: Scalars["Int"];
};

/** APIServiceStatus contains derived information about an API server */
export type V1beta1ApiServiceStatus = {
    __typename?: "V1beta1APIServiceStatus";
    /** Current service state of apiService. */
    conditions?: Maybe<Array<Maybe<V1beta1ApiServiceCondition>>>;
};

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export type V1beta1AggregationRule = {
    __typename?: "V1beta1AggregationRule";
    /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
    clusterRoleSelectors?: Maybe<Array<Maybe<V1LabelSelector>>>;
};

/** AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export type V1beta1AllowedCsiDriver = {
    __typename?: "V1beta1AllowedCSIDriver";
    /** Name is the registered name of the CSI driver */
    name: Scalars["String"];
};

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. */
export type V1beta1AllowedFlexVolume = {
    __typename?: "V1beta1AllowedFlexVolume";
    /** driver is the name of the Flexvolume driver. */
    driver: Scalars["String"];
};

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. */
export type V1beta1AllowedHostPath = {
    __typename?: "V1beta1AllowedHostPath";
    /**
     * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.
     *
     * Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
     */
    pathPrefix?: Maybe<Scalars["String"]>;
    /** when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. */
    readOnly?: Maybe<Scalars["Boolean"]>;
};

/** CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export type V1beta1CsiDriver = {
    __typename?: "V1beta1CSIDriver";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CSIDriverSpec is the specification of a CSIDriver. */
    spec: V1beta1CsiDriverSpec;
};

/** CSIDriverList is a collection of CSIDriver objects. */
export type V1beta1CsiDriverList = {
    __typename?: "V1beta1CSIDriverList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of CSIDriver */
    items: Array<Maybe<V1beta1CsiDriver>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CSIDriverSpec is the specification of a CSIDriver. */
export type V1beta1CsiDriverSpec = {
    __typename?: "V1beta1CSIDriverSpec";
    /**
     * attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the CSIDriverRegistry feature gate is enabled and the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called.
     *
     * This field is immutable.
     */
    attachRequired?: Maybe<Scalars["Boolean"]>;
    /**
     * Defines if the underlying volume supports changing ownership and permission of the volume before being mounted. Refer to the specific FSGroupPolicy values for additional details. This field is beta, and is only honored by servers that enable the CSIVolumeFSGroupPolicy feature gate.
     *
     * This field is immutable.
     *
     * Defaults to ReadWriteOnceWithFSType, which will examine each volume to determine if Kubernetes should modify ownership and permissions of the volume. With the default policy the defined fsGroup will only be applied if a fstype is defined and the volume's access mode contains ReadWriteOnce.
     */
    fsGroupPolicy?: Maybe<Scalars["String"]>;
    /**
     * If set to true, podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations. If set to false, pod information will not be passed on mount. Default is false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeConext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. "csi.storage.k8s.io/pod.name": pod.Name "csi.storage.k8s.io/pod.namespace": pod.Namespace "csi.storage.k8s.io/pod.uid": string(pod.UID) "csi.storage.k8s.io/ephemeral": "true" if the volume is an ephemeral inline volume
     *                                 defined by a CSIVolumeSource, otherwise "false"
     *
     * "csi.storage.k8s.io/ephemeral" is a new feature in Kubernetes 1.16. It is only required for drivers which support both the "Persistent" and "Ephemeral" VolumeLifecycleMode. Other drivers can leave pod info disabled and/or ignore this field. As Kubernetes 1.15 doesn't support this field, drivers can only support one mode when deployed on such a cluster and the deployment determines which mode that is, for example via a command line parameter of the driver.
     *
     * This field is immutable.
     */
    podInfoOnMount?: Maybe<Scalars["Boolean"]>;
    /**
     * RequiresRepublish indicates the CSI driver wants `NodePublishVolume` being periodically called to reflect any possible change in the mounted volume. This field defaults to false.
     *
     * Note: After a successful initial NodePublishVolume call, subsequent calls to NodePublishVolume should only update the contents of the volume. New mount points will not be seen by a running container.
     *
     * This is a beta feature and only available when the CSIServiceAccountToken feature is enabled.
     */
    requiresRepublish?: Maybe<Scalars["Boolean"]>;
    /**
     * If set to true, storageCapacity indicates that the CSI volume driver wants pod scheduling to consider the storage capacity that the driver deployment will report by creating CSIStorageCapacity objects with capacity information.
     *
     * The check can be enabled immediately when deploying a driver. In that case, provisioning new volumes with late binding will pause until the driver deployment has published some suitable CSIStorageCapacity object.
     *
     * Alternatively, the driver can be deployed with the field unset or false and it can be flipped later when storage capacity information has been published.
     *
     * This field is immutable.
     *
     * This is a beta field and only available when the CSIStorageCapacity feature is enabled. The default is false.
     */
    storageCapacity?: Maybe<Scalars["Boolean"]>;
    /**
     * TokenRequests indicates the CSI driver needs pods' service account tokens it is mounting volume for to do necessary authentication. Kubelet will pass the tokens in VolumeContext in the CSI NodePublishVolume calls. The CSI driver should parse and validate the following VolumeContext: "csi.storage.k8s.io/serviceAccount.tokens": {
     *   "<audience>": {
     *     "token": <token>,
     *     "expirationTimestamp": <expiration timestamp in RFC3339>,
     *   },
     *   ...
     * }
     *
     * Note: Audience in each TokenRequest should be different and at most one token is empty string. To receive a new token after expiry, RequiresRepublish can be used to trigger NodePublishVolume periodically.
     *
     * This is a beta feature and only available when the CSIServiceAccountToken feature is enabled.
     */
    tokenRequests?: Maybe<Array<Maybe<V1beta1TokenRequest>>>;
    /**
     * VolumeLifecycleModes defines what kind of volumes this CSI volume driver supports. The default if the list is empty is "Persistent", which is the usage defined by the CSI specification and implemented in Kubernetes via the usual PV/PVC mechanism. The other mode is "Ephemeral". In this mode, volumes are defined inline inside the pod spec with CSIVolumeSource and their lifecycle is tied to the lifecycle of that pod. A driver has to be aware of this because it is only going to get a NodePublishVolume call for such a volume. For more information about implementing this mode, see https://kubernetes-csi.github.io/docs/ephemeral-local-volumes.html A driver can support one or more of these modes and more modes may be added in the future.
     *
     * This field is immutable.
     */
    volumeLifecycleModes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** DEPRECATED - This group version of CSINode is deprecated by storage/v1/CSINode. See the release notes for more information. CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export type V1beta1CsiNode = {
    __typename?: "V1beta1CSINode";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
    spec: V1beta1CsiNodeSpec;
};

/** CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export type V1beta1CsiNodeDriver = {
    __typename?: "V1beta1CSINodeDriver";
    /** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
    allocatable?: Maybe<V1beta1VolumeNodeResources>;
    /** This is the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver. */
    name: Scalars["String"];
    /** nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required. */
    nodeID: Scalars["String"];
    /** topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology. */
    topologyKeys?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** CSINodeList is a collection of CSINode objects. */
export type V1beta1CsiNodeList = {
    __typename?: "V1beta1CSINodeList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of CSINode */
    items: Array<Maybe<V1beta1CsiNode>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export type V1beta1CsiNodeSpec = {
    __typename?: "V1beta1CSINodeSpec";
    /** drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty. */
    drivers: Array<Maybe<V1beta1CsiNodeDriver>>;
};

/**
 * CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.
 *
 * For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"
 *
 * The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero
 *
 * The producer of these objects can decide which approach is more suitable.
 *
 * They are consumed by the kube-scheduler if the CSIStorageCapacity beta feature gate is enabled there and a CSI driver opts into capacity-aware scheduling with CSIDriver.StorageCapacity.
 */
export type V1beta1CsiStorageCapacity = {
    __typename?: "V1beta1CSIStorageCapacity";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    capacity?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    maximumVolumeSize?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    nodeTopology?: Maybe<V1LabelSelector>;
    /** The name of the StorageClass that the reported capacity applies to. It must meet the same requirements as the name of a StorageClass object (non-empty, DNS subdomain). If that object no longer exists, the CSIStorageCapacity object is obsolete and should be removed by its creator. This field is immutable. */
    storageClassName: Scalars["String"];
};

/** CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export type V1beta1CsiStorageCapacityList = {
    __typename?: "V1beta1CSIStorageCapacityList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of CSIStorageCapacity objects. */
    items: Array<Maybe<V1beta1CsiStorageCapacity>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Describes a certificate signing request */
export type V1beta1CertificateSigningRequest = {
    __typename?: "V1beta1CertificateSigningRequest";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users. */
    spec?: Maybe<V1beta1CertificateSigningRequestSpec>;
    status?: Maybe<V1beta1CertificateSigningRequestStatus>;
};

export type V1beta1CertificateSigningRequestCondition = {
    __typename?: "V1beta1CertificateSigningRequestCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastUpdateTime?: Maybe<Scalars["String"]>;
    /** human readable message with details about the request state */
    message?: Maybe<Scalars["String"]>;
    /** brief reason for the request state */
    reason?: Maybe<Scalars["String"]>;
    /** Status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown". Defaults to "True". If unset, should be treated as "True". */
    status?: Maybe<Scalars["String"]>;
    /** type of the condition. Known conditions include "Approved", "Denied", and "Failed". */
    type: Scalars["String"];
};

export type V1beta1CertificateSigningRequestList = {
    __typename?: "V1beta1CertificateSigningRequestList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    items: Array<Maybe<V1beta1CertificateSigningRequest>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users. */
export type V1beta1CertificateSigningRequestSpec = {
    __typename?: "V1beta1CertificateSigningRequestSpec";
    /** Extra information about the requesting user. See user.Info interface for details. */
    extra?: Maybe<Scalars["JSON"]>;
    /** Group information about the requesting user. See user.Info interface for details. */
    groups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Base64-encoded PKCS#10 CSR data */
    request: Scalars["String"];
    /**
     * Requested signer for the request. It is a qualified name in the form: `scope-hostname.io/name`. If empty, it will be defaulted:
     *  1. If it's a kubelet client certificate, it is assigned
     *     "kubernetes.io/kube-apiserver-client-kubelet".
     *  2. If it's a kubelet serving certificate, it is assigned
     *     "kubernetes.io/kubelet-serving".
     *  3. Otherwise, it is assigned "kubernetes.io/legacy-unknown".
     * Distribution of trust for signers happens out of band. You can select on this field using `spec.signerName`.
     */
    signerName?: Maybe<Scalars["String"]>;
    /** UID information about the requesting user. See user.Info interface for details. */
    uid?: Maybe<Scalars["String"]>;
    /**
     * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
     *      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
     * Valid values are:
     *  "signing",
     *  "digital signature",
     *  "content commitment",
     *  "key encipherment",
     *  "key agreement",
     *  "data encipherment",
     *  "cert sign",
     *  "crl sign",
     *  "encipher only",
     *  "decipher only",
     *  "any",
     *  "server auth",
     *  "client auth",
     *  "code signing",
     *  "email protection",
     *  "s/mime",
     *  "ipsec end system",
     *  "ipsec tunnel",
     *  "ipsec user",
     *  "timestamping",
     *  "ocsp signing",
     *  "microsoft sgc",
     *  "netscape sgc"
     */
    usages?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Information about the requesting user. See user.Info interface for details. */
    username?: Maybe<Scalars["String"]>;
};

export type V1beta1CertificateSigningRequestStatus = {
    __typename?: "V1beta1CertificateSigningRequestStatus";
    /** If request was approved, the controller will place the issued certificate here. */
    certificate?: Maybe<Scalars["String"]>;
    /** Conditions applied to the request, such as approval or denial. */
    conditions?: Maybe<Array<Maybe<V1beta1CertificateSigningRequestCondition>>>;
};

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.22. */
export type V1beta1ClusterRole = {
    __typename?: "V1beta1ClusterRole";
    /** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
    aggregationRule?: Maybe<V1beta1AggregationRule>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Rules holds all the PolicyRules for this ClusterRole */
    rules?: Maybe<Array<Maybe<V1beta1PolicyRule>>>;
};

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.22. */
export type V1beta1ClusterRoleBinding = {
    __typename?: "V1beta1ClusterRoleBinding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RoleRef contains information that points to the role being used */
    roleRef: V1beta1RoleRef;
    /** Subjects holds references to the objects the role applies to. */
    subjects?: Maybe<Array<Maybe<V1beta1Subject>>>;
};

/** ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindingList, and will no longer be served in v1.22. */
export type V1beta1ClusterRoleBindingList = {
    __typename?: "V1beta1ClusterRoleBindingList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ClusterRoleBindings */
    items: Array<Maybe<V1beta1ClusterRoleBinding>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22. */
export type V1beta1ClusterRoleList = {
    __typename?: "V1beta1ClusterRoleList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of ClusterRoles */
    items: Array<Maybe<V1beta1ClusterRole>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CronJob represents the configuration of a single cron job. */
export type V1beta1CronJob = {
    __typename?: "V1beta1CronJob";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CronJobSpec describes how the job execution will look like and when it will actually run. */
    spec?: Maybe<V1beta1CronJobSpec>;
    /** CronJobStatus represents the current state of a cron job. */
    status?: Maybe<V1beta1CronJobStatus>;
};

/** CronJobList is a collection of cron jobs. */
export type V1beta1CronJobList = {
    __typename?: "V1beta1CronJobList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of CronJobs. */
    items: Array<Maybe<V1beta1CronJob>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export type V1beta1CronJobSpec = {
    __typename?: "V1beta1CronJobSpec";
    /** Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one */
    concurrencyPolicy?: Maybe<Scalars["String"]>;
    /** The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
    failedJobsHistoryLimit?: Maybe<Scalars["Int"]>;
    /** JobTemplateSpec describes the data a Job should have when created from a template */
    jobTemplate: V1beta1JobTemplateSpec;
    /** The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron. */
    schedule: Scalars["String"];
    /** Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones. */
    startingDeadlineSeconds?: Maybe<Scalars["Float"]>;
    /** The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3. */
    successfulJobsHistoryLimit?: Maybe<Scalars["Int"]>;
    /** This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false. */
    suspend?: Maybe<Scalars["Boolean"]>;
};

/** CronJobStatus represents the current state of a cron job. */
export type V1beta1CronJobStatus = {
    __typename?: "V1beta1CronJobStatus";
    /** A list of pointers to currently running jobs. */
    active?: Maybe<Array<Maybe<V1ObjectReference>>>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastScheduleTime?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastSuccessfulTime?: Maybe<Scalars["String"]>;
};

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export type V1beta1CustomResourceColumnDefinition = {
    __typename?: "V1beta1CustomResourceColumnDefinition";
    /** description is a human readable description of this column. */
    description?: Maybe<Scalars["String"]>;
    /** format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details. */
    format?: Maybe<Scalars["String"]>;
    /** JSONPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column. */
    jSONPath: Scalars["String"];
    /** name is a human readable name for the column. */
    name: Scalars["String"];
    /** priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0. */
    priority?: Maybe<Scalars["Int"]>;
    /** type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details. */
    type: Scalars["String"];
};

/** CustomResourceConversion describes how to convert different versions of a CR. */
export type V1beta1CustomResourceConversion = {
    __typename?: "V1beta1CustomResourceConversion";
    /** conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Defaults to `["v1beta1"]`. */
    conversionReviewVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
     *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhookClientConfig to be set.
     */
    strategy: Scalars["String"];
    /** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
    webhookClientConfig?: Maybe<V1beta1WebhookClientConfig>;
};

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. Deprecated in v1.16, planned for removal in v1.22. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead. */
export type V1beta1CustomResourceDefinition = {
    __typename?: "V1beta1CustomResourceDefinition";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
    spec: V1beta1CustomResourceDefinitionSpec;
    /** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
    status?: Maybe<V1beta1CustomResourceDefinitionStatus>;
};

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export type V1beta1CustomResourceDefinitionCondition = {
    __typename?: "V1beta1CustomResourceDefinitionCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** message is a human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** reason is a unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** status is the status of the condition. Can be True, False, Unknown. */
    status: Scalars["String"];
    /** type is the type of the condition. Types include Established, NamesAccepted and Terminating. */
    type: Scalars["String"];
};

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export type V1beta1CustomResourceDefinitionList = {
    __typename?: "V1beta1CustomResourceDefinitionList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items list individual CustomResourceDefinition objects */
    items: Array<Maybe<V1beta1CustomResourceDefinition>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export type V1beta1CustomResourceDefinitionNames = {
    __typename?: "V1beta1CustomResourceDefinitionNames";
    /** categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`. */
    categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls. */
    kind: Scalars["String"];
    /** listKind is the serialized kind of the list for this resource. Defaults to "`kind`List". */
    listKind?: Maybe<Scalars["String"]>;
    /** plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase. */
    plural: Scalars["String"];
    /** shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase. */
    shortNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`. */
    singular?: Maybe<Scalars["String"]>;
};

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export type V1beta1CustomResourceDefinitionSpec = {
    __typename?: "V1beta1CustomResourceDefinitionSpec";
    /** additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If present, this field configures columns for all versions. Top-level and per-version columns are mutually exclusive. If no top-level or per-version columns are specified, a single column displaying the age of the custom resource is used. */
    additionalPrinterColumns?: Maybe<
        Array<Maybe<V1beta1CustomResourceColumnDefinition>>
    >;
    /** CustomResourceConversion describes how to convert different versions of a CR. */
    conversion?: Maybe<V1beta1CustomResourceConversion>;
    /** group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). */
    group: Scalars["String"];
    /** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
    names: V1beta1CustomResourceDefinitionNames;
    /** preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. If false, schemas must be defined for all versions. Defaults to true in v1beta for backwards compatibility. Deprecated: will be required to be false in v1. Preservation of unknown fields can be specified in the validation schema using the `x-kubernetes-preserve-unknown-fields: true` extension. See https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#pruning-versus-preserving-unknown-fields for details. */
    preserveUnknownFields?: Maybe<Scalars["Boolean"]>;
    /** scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`. Default is `Namespaced`. */
    scope: Scalars["String"];
    /** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
    subresources?: Maybe<V1beta1CustomResourceSubresources>;
    /** CustomResourceValidation is a list of validation methods for CustomResources. */
    validation?: Maybe<V1beta1CustomResourceValidation>;
    /** version is the API version of the defined custom resource. The custom resources are served under `/apis/<group>/<version>/...`. Must match the name of the first item in the `versions` list if `version` and `versions` are both specified. Optional if `versions` is specified. Deprecated: use `versions` instead. */
    version?: Maybe<Scalars["String"]>;
    /** versions is the list of all API versions of the defined custom resource. Optional if `version` is specified. The name of the first item in the `versions` list must match the `version` field if `version` and `versions` are both specified. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    versions?: Maybe<Array<Maybe<V1beta1CustomResourceDefinitionVersion>>>;
};

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export type V1beta1CustomResourceDefinitionStatus = {
    __typename?: "V1beta1CustomResourceDefinitionStatus";
    /** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
    acceptedNames?: Maybe<V1beta1CustomResourceDefinitionNames>;
    /** conditions indicate state for particular aspects of a CustomResourceDefinition */
    conditions?: Maybe<Array<Maybe<V1beta1CustomResourceDefinitionCondition>>>;
    /** storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list. */
    storedVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** CustomResourceDefinitionVersion describes a version for CRD. */
export type V1beta1CustomResourceDefinitionVersion = {
    __typename?: "V1beta1CustomResourceDefinitionVersion";
    /** additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead). If no top-level or per-version columns are specified, a single column displaying the age of the custom resource is used. */
    additionalPrinterColumns?: Maybe<
        Array<Maybe<V1beta1CustomResourceColumnDefinition>>
    >;
    /** deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. */
    deprecated?: Maybe<Scalars["Boolean"]>;
    /** deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. */
    deprecationWarning?: Maybe<Scalars["String"]>;
    /** name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true. */
    name: Scalars["String"];
    /** CustomResourceValidation is a list of validation methods for CustomResources. */
    schema?: Maybe<V1beta1CustomResourceValidation>;
    /** served is a flag enabling/disabling this version from being served via REST APIs */
    served: Scalars["Boolean"];
    /** storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true. */
    storage: Scalars["Boolean"];
    /** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
    subresources?: Maybe<V1beta1CustomResourceSubresources>;
};

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export type V1beta1CustomResourceSubresourceScale = {
    __typename?: "V1beta1CustomResourceSubresourceScale";
    /** labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string. */
    labelSelectorPath?: Maybe<Scalars["String"]>;
    /** specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET. */
    specReplicasPath: Scalars["String"];
    /** statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0. */
    statusReplicasPath: Scalars["String"];
};

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export type V1beta1CustomResourceSubresources = {
    __typename?: "V1beta1CustomResourceSubresources";
    /** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
    scale?: Maybe<V1beta1CustomResourceSubresourceScale>;
    /** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
    status?: Maybe<Scalars["JSON"]>;
};

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export type V1beta1CustomResourceValidation = {
    __typename?: "V1beta1CustomResourceValidation";
    /** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
    openAPIV3Schema?: Maybe<V1beta1JsonSchemaProps>;
};

/** Endpoint represents a single logical "backend" implementing a service. */
export type V1beta1Endpoint = {
    __typename?: "V1beta1Endpoint";
    /** addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. */
    addresses: Array<Maybe<Scalars["String"]>>;
    /** EndpointConditions represents the current condition of an endpoint. */
    conditions?: Maybe<V1beta1EndpointConditions>;
    /** EndpointHints provides hints describing how an endpoint should be consumed. */
    hints?: Maybe<V1beta1EndpointHints>;
    /** hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation. */
    hostname?: Maybe<Scalars["String"]>;
    /** nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node. This field can be enabled with the EndpointSliceNodeName feature gate. */
    nodeName?: Maybe<Scalars["String"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    targetRef?: Maybe<V1ObjectReference>;
    /**
     * topology contains arbitrary topology information associated with the endpoint. These key/value pairs must conform with the label format. https://kubernetes.io/docs/concepts/overview/working-with-objects/labels Topology may include a maximum of 16 key/value pairs. This includes, but is not limited to the following well known keys: * kubernetes.io/hostname: the value indicates the hostname of the node
     *   where the endpoint is located. This should match the corresponding
     *   node label.
     * * topology.kubernetes.io/zone: the value indicates the zone where the
     *   endpoint is located. This should match the corresponding node label.
     * * topology.kubernetes.io/region: the value indicates the region where the
     *   endpoint is located. This should match the corresponding node label.
     * This field is deprecated and will be removed in future api versions.
     */
    topology?: Maybe<Scalars["JSON"]>;
};

/** EndpointConditions represents the current condition of an endpoint. */
export type V1beta1EndpointConditions = {
    __typename?: "V1beta1EndpointConditions";
    /** ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints. */
    ready?: Maybe<Scalars["Boolean"]>;
    /** serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition. This field can be enabled with the EndpointSliceTerminatingCondition feature gate. */
    serving?: Maybe<Scalars["Boolean"]>;
    /** terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating. This field can be enabled with the EndpointSliceTerminatingCondition feature gate. */
    terminating?: Maybe<Scalars["Boolean"]>;
};

/** EndpointHints provides hints describing how an endpoint should be consumed. */
export type V1beta1EndpointHints = {
    __typename?: "V1beta1EndpointHints";
    /** forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing. May contain a maximum of 8 entries. */
    forZones?: Maybe<Array<Maybe<V1beta1ForZone>>>;
};

/** EndpointPort represents a Port used by an EndpointSlice */
export type V1beta1EndpointPort = {
    __typename?: "V1beta1EndpointPort";
    /** The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol. */
    appProtocol?: Maybe<Scalars["String"]>;
    /** The name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is dervied from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string. */
    name?: Maybe<Scalars["String"]>;
    /** The port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer. */
    port?: Maybe<Scalars["Int"]>;
    /** The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. */
    protocol?: Maybe<Scalars["String"]>;
};

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export type V1beta1EndpointSlice = {
    __typename?: "V1beta1EndpointSlice";
    /** addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name. */
    addressType: Scalars["String"];
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints. */
    endpoints: Array<Maybe<V1beta1Endpoint>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports. */
    ports?: Maybe<Array<Maybe<V1beta1EndpointPort>>>;
};

/** EndpointSliceList represents a list of endpoint slices */
export type V1beta1EndpointSliceList = {
    __typename?: "V1beta1EndpointSliceList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of endpoint slices */
    items: Array<Maybe<V1beta1EndpointSlice>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export type V1beta1Event = {
    __typename?: "V1beta1Event";
    /** action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field can have at most 128 characters. */
    action?: Maybe<Scalars["String"]>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type. */
    deprecatedCount?: Maybe<Scalars["Int"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    deprecatedFirstTimestamp?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    deprecatedLastTimestamp?: Maybe<Scalars["String"]>;
    /** EventSource contains information for an event. */
    deprecatedSource?: Maybe<V1EventSource>;
    /** MicroTime is version of Time with microsecond level precision. */
    eventTime: Scalars["String"];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB. */
    note?: Maybe<Scalars["String"]>;
    /** reason is why the action was taken. It is human-readable. This field can have at most 128 characters. */
    reason?: Maybe<Scalars["String"]>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    regarding?: Maybe<V1ObjectReference>;
    /** ObjectReference contains enough information to let you inspect or modify the referred object. */
    related?: Maybe<V1ObjectReference>;
    /** reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events. */
    reportingController?: Maybe<Scalars["String"]>;
    /** reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters. */
    reportingInstance?: Maybe<Scalars["String"]>;
    /** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
    series?: Maybe<V1beta1EventSeries>;
    /** type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. */
    type?: Maybe<Scalars["String"]>;
};

/** EventList is a list of Event objects. */
export type V1beta1EventList = {
    __typename?: "V1beta1EventList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is a list of schema objects. */
    items: Array<Maybe<V1beta1Event>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export type V1beta1EventSeries = {
    __typename?: "V1beta1EventSeries";
    /** count is the number of occurrences in this series up to the last heartbeat time. */
    count: Scalars["Int"];
    /** MicroTime is version of Time with microsecond level precision. */
    lastObservedTime: Scalars["String"];
};

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export type V1beta1ExternalDocumentation = {
    __typename?: "V1beta1ExternalDocumentation";
    description?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
export type V1beta1FsGroupStrategyOptions = {
    __typename?: "V1beta1FSGroupStrategyOptions";
    /** ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs. */
    ranges?: Maybe<Array<Maybe<V1beta1IdRange>>>;
    /** rule is the strategy that will dictate what FSGroup is used in the SecurityContext. */
    rule?: Maybe<Scalars["String"]>;
};

/** FlowDistinguisherMethod specifies the method of a flow distinguisher. */
export type V1beta1FlowDistinguisherMethod = {
    __typename?: "V1beta1FlowDistinguisherMethod";
    /** `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required. */
    type: Scalars["String"];
};

/** FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher". */
export type V1beta1FlowSchema = {
    __typename?: "V1beta1FlowSchema";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** FlowSchemaSpec describes how the FlowSchema's specification looks like. */
    spec?: Maybe<V1beta1FlowSchemaSpec>;
    /** FlowSchemaStatus represents the current state of a FlowSchema. */
    status?: Maybe<V1beta1FlowSchemaStatus>;
};

/** FlowSchemaCondition describes conditions for a FlowSchema. */
export type V1beta1FlowSchemaCondition = {
    __typename?: "V1beta1FlowSchemaCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** `message` is a human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** `reason` is a unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** `status` is the status of the condition. Can be True, False, Unknown. Required. */
    status?: Maybe<Scalars["String"]>;
    /** `type` is the type of the condition. Required. */
    type?: Maybe<Scalars["String"]>;
};

/** FlowSchemaList is a list of FlowSchema objects. */
export type V1beta1FlowSchemaList = {
    __typename?: "V1beta1FlowSchemaList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** `items` is a list of FlowSchemas. */
    items: Array<Maybe<V1beta1FlowSchema>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** FlowSchemaSpec describes how the FlowSchema's specification looks like. */
export type V1beta1FlowSchemaSpec = {
    __typename?: "V1beta1FlowSchemaSpec";
    /** FlowDistinguisherMethod specifies the method of a flow distinguisher. */
    distinguisherMethod?: Maybe<V1beta1FlowDistinguisherMethod>;
    /** `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default. */
    matchingPrecedence?: Maybe<Scalars["Int"]>;
    /** PriorityLevelConfigurationReference contains information that points to the "request-priority" being used. */
    priorityLevelConfiguration: V1beta1PriorityLevelConfigurationReference;
    /** `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema. */
    rules?: Maybe<Array<Maybe<V1beta1PolicyRulesWithSubjects>>>;
};

/** FlowSchemaStatus represents the current state of a FlowSchema. */
export type V1beta1FlowSchemaStatus = {
    __typename?: "V1beta1FlowSchemaStatus";
    /** `conditions` is a list of the current states of FlowSchema. */
    conditions?: Maybe<Array<Maybe<V1beta1FlowSchemaCondition>>>;
};

/** ForZone provides information about which zones should consume this endpoint. */
export type V1beta1ForZone = {
    __typename?: "V1beta1ForZone";
    /** name represents the name of the zone. */
    name: Scalars["String"];
};

/** GroupSubject holds detailed information for group-kind subject. */
export type V1beta1GroupSubject = {
    __typename?: "V1beta1GroupSubject";
    /** name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required. */
    name: Scalars["String"];
};

/** HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export type V1beta1HttpIngressPath = {
    __typename?: "V1beta1HTTPIngressPath";
    /** IngressBackend describes all endpoints for a given service and port. */
    backend: V1beta1IngressBackend;
    /** Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. When unspecified, all paths from incoming requests are matched. */
    path?: Maybe<Scalars["String"]>;
    /**
     * PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
     *   done on a path element by element basis. A path element refers is the
     *   list of labels in the path split by the '/' separator. A request is a
     *   match for path p if every p is an element-wise prefix of p of the
     *   request path. Note that if the last element of the path is a substring
     *   of the last element in request path, it is not a match (e.g. /foo/bar
     *   matches /foo/bar/baz, but does not match /foo/barbaz).
     * * ImplementationSpecific: Interpretation of the Path matching is up to
     *   the IngressClass. Implementations can treat this as a separate PathType
     *   or treat it identically to Prefix or Exact path types.
     * Implementations are required to support all path types. Defaults to ImplementationSpecific.
     */
    pathType?: Maybe<Scalars["String"]>;
};

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export type V1beta1HttpIngressRuleValue = {
    __typename?: "V1beta1HTTPIngressRuleValue";
    /** A collection of paths that map requests to backends. */
    paths: Array<Maybe<V1beta1HttpIngressPath>>;
};

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. */
export type V1beta1HostPortRange = {
    __typename?: "V1beta1HostPortRange";
    /** max is the end of the range, inclusive. */
    max: Scalars["Int"];
    /** min is the start of the range, inclusive. */
    min: Scalars["Int"];
};

/** IDRange provides a min/max of an allowed range of IDs. */
export type V1beta1IdRange = {
    __typename?: "V1beta1IDRange";
    /** max is the end of the range, inclusive. */
    max: Scalars["Float"];
    /** min is the start of the range, inclusive. */
    min: Scalars["Float"];
};

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export type V1beta1Ingress = {
    __typename?: "V1beta1Ingress";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** IngressSpec describes the Ingress the user wishes to exist. */
    spec?: Maybe<V1beta1IngressSpec>;
    /** IngressStatus describe the current state of the Ingress. */
    status?: Maybe<V1beta1IngressStatus>;
};

/** IngressBackend describes all endpoints for a given service and port. */
export type V1beta1IngressBackend = {
    __typename?: "V1beta1IngressBackend";
    /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
    resource?: Maybe<V1TypedLocalObjectReference>;
    /** Specifies the name of the referenced service. */
    serviceName?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    servicePort?: Maybe<Scalars["String"]>;
};

/** IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export type V1beta1IngressClass = {
    __typename?: "V1beta1IngressClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** IngressClassSpec provides information about the class of an Ingress. */
    spec?: Maybe<V1beta1IngressClassSpec>;
};

/** IngressClassList is a collection of IngressClasses. */
export type V1beta1IngressClassList = {
    __typename?: "V1beta1IngressClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of IngressClasses. */
    items: Array<Maybe<V1beta1IngressClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export type V1beta1IngressClassParametersReference = {
    __typename?: "V1beta1IngressClassParametersReference";
    /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
    apiGroup?: Maybe<Scalars["String"]>;
    /** Kind is the type of resource being referenced. */
    kind: Scalars["String"];
    /** Name is the name of resource being referenced. */
    name: Scalars["String"];
    /** Namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster". */
    namespace?: Maybe<Scalars["String"]>;
    /** Scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace". Field can be enabled with IngressClassNamespacedParams feature gate. */
    scope?: Maybe<Scalars["String"]>;
};

/** IngressClassSpec provides information about the class of an Ingress. */
export type V1beta1IngressClassSpec = {
    __typename?: "V1beta1IngressClassSpec";
    /** Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable. */
    controller?: Maybe<Scalars["String"]>;
    /** IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
    parameters?: Maybe<V1beta1IngressClassParametersReference>;
};

/** IngressList is a collection of Ingress. */
export type V1beta1IngressList = {
    __typename?: "V1beta1IngressList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of Ingress. */
    items: Array<Maybe<V1beta1Ingress>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export type V1beta1IngressRule = {
    __typename?: "V1beta1IngressRule";
    /**
     * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
     *    the IP in the Spec of the parent Ingress.
     * 2. The `:` delimiter is not respected because ports are not allowed.
     * 	  Currently the port of an Ingress is implicitly :80 for http and
     * 	  :443 for https.
     * Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
     *
     * Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
     */
    host?: Maybe<Scalars["String"]>;
    /** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
    http?: Maybe<V1beta1HttpIngressRuleValue>;
};

/** IngressSpec describes the Ingress the user wishes to exist. */
export type V1beta1IngressSpec = {
    __typename?: "V1beta1IngressSpec";
    /** IngressBackend describes all endpoints for a given service and port. */
    backend?: Maybe<V1beta1IngressBackend>;
    /** IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation. */
    ingressClassName?: Maybe<Scalars["String"]>;
    /** A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend. */
    rules?: Maybe<Array<Maybe<V1beta1IngressRule>>>;
    /** TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI. */
    tls?: Maybe<Array<Maybe<V1beta1IngressTls>>>;
};

/** IngressStatus describe the current state of the Ingress. */
export type V1beta1IngressStatus = {
    __typename?: "V1beta1IngressStatus";
    /** LoadBalancerStatus represents the status of a load-balancer. */
    loadBalancer?: Maybe<V1LoadBalancerStatus>;
};

/** IngressTLS describes the transport layer security associated with an Ingress. */
export type V1beta1IngressTls = {
    __typename?: "V1beta1IngressTLS";
    /** Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified. */
    hosts?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing. */
    secretName?: Maybe<Scalars["String"]>;
};

/** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
export type V1beta1JsonSchemaProps = {
    __typename?: "V1beta1JSONSchemaProps";
    /** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
    additionalItems?: Maybe<Scalars["JSON"]>;
    /** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
    additionalProperties?: Maybe<Scalars["JSON"]>;
    allOf?: Maybe<Array<Maybe<V1beta1JsonSchemaProps>>>;
    anyOf?: Maybe<Array<Maybe<V1beta1JsonSchemaProps>>>;
    /** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
    default?: Maybe<Scalars["JSON"]>;
    definitions?: Maybe<Scalars["JSON"]>;
    dependencies?: Maybe<Scalars["JSON"]>;
    description?: Maybe<Scalars["String"]>;
    enum?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
    /** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
    example?: Maybe<Scalars["JSON"]>;
    exclusiveMaximum?: Maybe<Scalars["Boolean"]>;
    exclusiveMinimum?: Maybe<Scalars["Boolean"]>;
    /** ExternalDocumentation allows referencing an external resource for extended documentation. */
    externalDocs?: Maybe<V1beta1ExternalDocumentation>;
    /**
     * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:
     *
     * - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\d{3}[- ]?\d{2}[- ]?\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.
     */
    format?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["String"]>;
    /** JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
    items?: Maybe<Scalars["JSON"]>;
    maxItems?: Maybe<Scalars["Float"]>;
    maxLength?: Maybe<Scalars["Float"]>;
    maxProperties?: Maybe<Scalars["Float"]>;
    maximum?: Maybe<Scalars["Float"]>;
    minItems?: Maybe<Scalars["Float"]>;
    minLength?: Maybe<Scalars["Float"]>;
    minProperties?: Maybe<Scalars["Float"]>;
    minimum?: Maybe<Scalars["Float"]>;
    multipleOf?: Maybe<Scalars["Float"]>;
    /** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
    not?: Maybe<V1beta1JsonSchemaProps>;
    nullable?: Maybe<Scalars["Boolean"]>;
    oneOf?: Maybe<Array<Maybe<V1beta1JsonSchemaProps>>>;
    pattern?: Maybe<Scalars["String"]>;
    patternProperties?: Maybe<Scalars["JSON"]>;
    properties?: Maybe<Scalars["JSON"]>;
    ref?: Maybe<Scalars["String"]>;
    required?: Maybe<Array<Maybe<Scalars["String"]>>>;
    schema?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    uniqueItems?: Maybe<Scalars["Boolean"]>;
    /** x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata). */
    xKubernetesEmbeddedResource?: Maybe<Scalars["Boolean"]>;
    /**
     * x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:
     *
     * 1) anyOf:
     *    - type: integer
     *    - type: string
     * 2) allOf:
     *    - anyOf:
     *      - type: integer
     *      - type: string
     *    - ... zero or more
     */
    xKubernetesIntOrString?: Maybe<Scalars["Boolean"]>;
    /**
     * x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.
     *
     * This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).
     *
     * The properties specified must either be required or have a default value, to ensure those properties are present for all list items.
     */
    xKubernetesListMapKeys?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:
     *
     * 1) `atomic`: the list is treated as a single entity, like a scalar.
     *      Atomic lists will be entirely replaced when updated. This extension
     *      may be used on any type of list (struct, scalar, ...).
     * 2) `set`:
     *      Sets are lists that must not have multiple items with the same value. Each
     *      value must be a scalar, an object with x-kubernetes-map-type `atomic` or an
     *      array with x-kubernetes-list-type `atomic`.
     * 3) `map`:
     *      These lists are like maps in that their elements have a non-index key
     *      used to identify them. Order is preserved upon merge. The map tag
     *      must only be used on a list with elements of type object.
     * Defaults to atomic for arrays.
     */
    xKubernetesListType?: Maybe<Scalars["String"]>;
    /**
     * x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:
     *
     * 1) `granular`:
     *      These maps are actual maps (key-value pairs) and each fields are independent
     *      from each other (they can each be manipulated by separate actors). This is
     *      the default behaviour for all maps.
     * 2) `atomic`: the list is treated as a single entity, like a scalar.
     *      Atomic maps will be entirely replaced when updated.
     */
    xKubernetesMapType?: Maybe<Scalars["String"]>;
    /** x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden. */
    xKubernetesPreserveUnknownFields?: Maybe<Scalars["Boolean"]>;
};

/** JobTemplateSpec describes the data a Job should have when created from a template */
export type V1beta1JobTemplateSpec = {
    __typename?: "V1beta1JobTemplateSpec";
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** JobSpec describes how the job execution will look like. */
    spec?: Maybe<V1JobSpec>;
};

/** Lease defines a lease concept. */
export type V1beta1Lease = {
    __typename?: "V1beta1Lease";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** LeaseSpec is a specification of a Lease. */
    spec?: Maybe<V1beta1LeaseSpec>;
};

/** LeaseList is a list of Lease objects. */
export type V1beta1LeaseList = {
    __typename?: "V1beta1LeaseList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of schema objects. */
    items: Array<Maybe<V1beta1Lease>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** LeaseSpec is a specification of a Lease. */
export type V1beta1LeaseSpec = {
    __typename?: "V1beta1LeaseSpec";
    /** MicroTime is version of Time with microsecond level precision. */
    acquireTime?: Maybe<Scalars["String"]>;
    /** holderIdentity contains the identity of the holder of a current lease. */
    holderIdentity?: Maybe<Scalars["String"]>;
    /** leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime. */
    leaseDurationSeconds?: Maybe<Scalars["Int"]>;
    /** leaseTransitions is the number of transitions of a lease between holders. */
    leaseTransitions?: Maybe<Scalars["Int"]>;
    /** MicroTime is version of Time with microsecond level precision. */
    renewTime?: Maybe<Scalars["String"]>;
};

/** LimitResponse defines how to handle requests that can not be executed right now. */
export type V1beta1LimitResponse = {
    __typename?: "V1beta1LimitResponse";
    /** QueuingConfiguration holds the configuration parameters for queuing */
    queuing?: Maybe<V1beta1QueuingConfiguration>;
    /** `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required. */
    type: Scalars["String"];
};

/**
 * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
 *  * How are requests for this priority level limited?
 *  * What should be done with requests that exceed the limit?
 */
export type V1beta1LimitedPriorityLevelConfiguration = {
    __typename?: "V1beta1LimitedPriorityLevelConfiguration";
    /**
     * `assuredConcurrencyShares` (ACS) configures the execution limit, which is a limit on the number of requests of this priority level that may be exeucting at a given time.  ACS must be a positive number. The server's concurrency limit (SCL) is divided among the concurrency-controlled priority levels in proportion to their assured concurrency shares. This produces the assured concurrency value (ACV) --- the number of requests that may be executing at a time --- for each such priority level:
     *
     *             ACV(l) = ceil( SCL * ACS(l) / ( sum[priority levels k] ACS(k) ) )
     *
     * bigger numbers of ACS mean more reserved concurrent requests (at the expense of every other PL). This field has a default value of 30.
     */
    assuredConcurrencyShares?: Maybe<Scalars["Int"]>;
    /** LimitResponse defines how to handle requests that can not be executed right now. */
    limitResponse?: Maybe<V1beta1LimitResponse>;
};

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export type V1beta1LocalSubjectAccessReview = {
    __typename?: "V1beta1LocalSubjectAccessReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
    spec: V1beta1SubjectAccessReviewSpec;
    /** SubjectAccessReviewStatus */
    status?: Maybe<V1beta1SubjectAccessReviewStatus>;
};

/** MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export type V1beta1MutatingWebhook = {
    __typename?: "V1beta1MutatingWebhook";
    /** AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`. */
    admissionReviewVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** WebhookClientConfig contains the information to make a TLS connection with the webhook */
    clientConfig: V1beta1WebhookClientConfig;
    /** FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore. */
    failurePolicy?: Maybe<Scalars["String"]>;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     *
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
     *
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
     *
     * Defaults to "Exact"
     */
    matchPolicy?: Maybe<Scalars["String"]>;
    /** The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required. */
    name: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    namespaceSelector?: Maybe<V1LabelSelector>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    objectSelector?: Maybe<V1LabelSelector>;
    /**
     * reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".
     *
     * Never: the webhook will not be called more than once in a single admission evaluation.
     *
     * IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.
     *
     * Defaults to "Never".
     */
    reinvocationPolicy?: Maybe<Scalars["String"]>;
    /** Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. */
    rules?: Maybe<Array<Maybe<V1beta1RuleWithOperations>>>;
    /** SideEffects states whether this webhook has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown. */
    sideEffects?: Maybe<Scalars["String"]>;
    /** TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds. */
    timeoutSeconds?: Maybe<Scalars["Int"]>;
};

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead. */
export type V1beta1MutatingWebhookConfiguration = {
    __typename?: "V1beta1MutatingWebhookConfiguration";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Webhooks is a list of webhooks and the affected resources and operations. */
    webhooks?: Maybe<Array<Maybe<V1beta1MutatingWebhook>>>;
};

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export type V1beta1MutatingWebhookConfigurationList = {
    __typename?: "V1beta1MutatingWebhookConfigurationList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of MutatingWebhookConfiguration. */
    items: Array<Maybe<V1beta1MutatingWebhookConfiguration>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export type V1beta1NonResourceAttributes = {
    __typename?: "V1beta1NonResourceAttributes";
    /** Path is the URL path of the request */
    path?: Maybe<Scalars["String"]>;
    /** Verb is the standard HTTP verb */
    verb?: Maybe<Scalars["String"]>;
};

/** NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request. */
export type V1beta1NonResourcePolicyRule = {
    __typename?: "V1beta1NonResourcePolicyRule";
    /**
     * `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:
     *   - "/healthz" is legal
     *   - "/hea*" is illegal
     *   - "/hea" is legal but matches nothing
     *   - "/hea/*" also matches nothing
     *   - "/healthz/*" matches all per-component health checks.
     * "*" matches all non-resource urls. if it is present, it must be the only entry. Required.
     */
    nonResourceURLs: Array<Maybe<Scalars["String"]>>;
    /** `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs. If it is present, it must be the only entry. Required. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** NonResourceRule holds information that describes a rule for the non-resource */
export type V1beta1NonResourceRule = {
    __typename?: "V1beta1NonResourceRule";
    /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all. */
    nonResourceURLs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** Overhead structure represents the resource overhead associated with running a pod. */
export type V1beta1Overhead = {
    __typename?: "V1beta1Overhead";
    /** PodFixed represents the fixed resource overhead associated with running a pod. */
    podFixed?: Maybe<Scalars["JSON"]>;
};

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export type V1beta1PodDisruptionBudget = {
    __typename?: "V1beta1PodDisruptionBudget";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
    spec?: Maybe<V1beta1PodDisruptionBudgetSpec>;
    /** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
    status?: Maybe<V1beta1PodDisruptionBudgetStatus>;
};

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export type V1beta1PodDisruptionBudgetList = {
    __typename?: "V1beta1PodDisruptionBudgetList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    items: Array<Maybe<V1beta1PodDisruptionBudget>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export type V1beta1PodDisruptionBudgetSpec = {
    __typename?: "V1beta1PodDisruptionBudgetSpec";
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    maxUnavailable?: Maybe<Scalars["String"]>;
    /** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
    minAvailable?: Maybe<Scalars["String"]>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
};

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export type V1beta1PodDisruptionBudgetStatus = {
    __typename?: "V1beta1PodDisruptionBudgetStatus";
    /**
     * Conditions contain conditions for PDB. The disruption controller sets the DisruptionAllowed condition. The following are known values for the reason field (additional reasons could be added in the future): - SyncFailed: The controller encountered an error and wasn't able to compute
     *               the number of allowed disruptions. Therefore no disruptions are
     *               allowed and the status of the condition will be False.
     * - InsufficientPods: The number of pods are either at or below the number
     *                     required by the PodDisruptionBudget. No disruptions are
     *                     allowed and the status of the condition will be False.
     * - SufficientPods: There are more pods than required by the PodDisruptionBudget.
     *                   The condition will be True, and the number of allowed
     *                   disruptions are provided by the disruptionsAllowed property.
     */
    conditions?: Maybe<Array<Maybe<V1Condition>>>;
    /** current number of healthy pods */
    currentHealthy: Scalars["Int"];
    /** minimum desired number of healthy pods */
    desiredHealthy: Scalars["Int"];
    /** DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions. */
    disruptedPods?: Maybe<Scalars["JSON"]>;
    /** Number of pod disruptions that are currently allowed. */
    disruptionsAllowed: Scalars["Int"];
    /** total number of pods counted by this disruption budget */
    expectedPods: Scalars["Int"];
    /** Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB's object generation. */
    observedGeneration?: Maybe<Scalars["Float"]>;
};

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21. */
export type V1beta1PodSecurityPolicy = {
    __typename?: "V1beta1PodSecurityPolicy";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PodSecurityPolicySpec defines the policy enforced. */
    spec?: Maybe<V1beta1PodSecurityPolicySpec>;
};

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. */
export type V1beta1PodSecurityPolicyList = {
    __typename?: "V1beta1PodSecurityPolicyList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is a list of schema objects. */
    items: Array<Maybe<V1beta1PodSecurityPolicy>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PodSecurityPolicySpec defines the policy enforced. */
export type V1beta1PodSecurityPolicySpec = {
    __typename?: "V1beta1PodSecurityPolicySpec";
    /** allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. */
    allowPrivilegeEscalation?: Maybe<Scalars["Boolean"]>;
    /** AllowedCSIDrivers is an allowlist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is a beta field, and is only honored if the API server enables the CSIInlineVolume feature gate. */
    allowedCSIDrivers?: Maybe<Array<Maybe<V1beta1AllowedCsiDriver>>>;
    /** allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities. */
    allowedCapabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** allowedFlexVolumes is an allowlist of Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field. */
    allowedFlexVolumes?: Maybe<Array<Maybe<V1beta1AllowedFlexVolume>>>;
    /** allowedHostPaths is an allowlist of host paths. Empty indicates that all host paths may be used. */
    allowedHostPaths?: Maybe<Array<Maybe<V1beta1AllowedHostPath>>>;
    /** AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled. */
    allowedProcMountTypes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.
     *
     * Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
     */
    allowedUnsafeSysctls?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list. */
    defaultAddCapabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. */
    defaultAllowPrivilegeEscalation?: Maybe<Scalars["Boolean"]>;
    /**
     * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.
     *
     * Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
     */
    forbiddenSysctls?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
    fsGroup: V1beta1FsGroupStrategyOptions;
    /** hostIPC determines if the policy allows the use of HostIPC in the pod spec. */
    hostIPC?: Maybe<Scalars["Boolean"]>;
    /** hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. */
    hostNetwork?: Maybe<Scalars["Boolean"]>;
    /** hostPID determines if the policy allows the use of HostPID in the pod spec. */
    hostPID?: Maybe<Scalars["Boolean"]>;
    /** hostPorts determines which host port ranges are allowed to be exposed. */
    hostPorts?: Maybe<Array<Maybe<V1beta1HostPortRange>>>;
    /** privileged determines if a pod can request to be run as privileged. */
    privileged?: Maybe<Scalars["Boolean"]>;
    /** readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to. */
    readOnlyRootFilesystem?: Maybe<Scalars["Boolean"]>;
    /** requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added. */
    requiredDropCapabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
    runAsGroup?: Maybe<V1beta1RunAsGroupStrategyOptions>;
    /** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
    runAsUser: V1beta1RunAsUserStrategyOptions;
    /** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
    runtimeClass?: Maybe<V1beta1RuntimeClassStrategyOptions>;
    /** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
    seLinux: V1beta1SeLinuxStrategyOptions;
    /** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
    supplementalGroups: V1beta1SupplementalGroupsStrategyOptions;
    /** volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'. */
    volumes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export type V1beta1PolicyRule = {
    __typename?: "V1beta1PolicyRule";
    /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both. */
    nonResourceURLs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
    resourceNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Resources is a list of resources this rule applies to.  '*' represents all resources in the specified apiGroups. '*\/foo' represents the subresource 'foo' for all resources in the specified apiGroups. */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. '*' represents all verbs. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request. */
export type V1beta1PolicyRulesWithSubjects = {
    __typename?: "V1beta1PolicyRulesWithSubjects";
    /** `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL. */
    nonResourceRules?: Maybe<Array<Maybe<V1beta1NonResourcePolicyRule>>>;
    /** `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty. */
    resourceRules?: Maybe<Array<Maybe<V1beta1ResourcePolicyRule>>>;
    /** subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required. */
    subjects: Array<Maybe<V1beta1Subject>>;
};

/** DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export type V1beta1PriorityClass = {
    __typename?: "V1beta1PriorityClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
    description?: Maybe<Scalars["String"]>;
    /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
    globalDefault?: Maybe<Scalars["Boolean"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
    preemptionPolicy?: Maybe<Scalars["String"]>;
    /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
    value: Scalars["Int"];
};

/** PriorityClassList is a collection of priority classes. */
export type V1beta1PriorityClassList = {
    __typename?: "V1beta1PriorityClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of PriorityClasses */
    items: Array<Maybe<V1beta1PriorityClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PriorityLevelConfiguration represents the configuration of a priority level. */
export type V1beta1PriorityLevelConfiguration = {
    __typename?: "V1beta1PriorityLevelConfiguration";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** PriorityLevelConfigurationSpec specifies the configuration of a priority level. */
    spec?: Maybe<V1beta1PriorityLevelConfigurationSpec>;
    /** PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
    status?: Maybe<V1beta1PriorityLevelConfigurationStatus>;
};

/** PriorityLevelConfigurationCondition defines the condition of priority level. */
export type V1beta1PriorityLevelConfigurationCondition = {
    __typename?: "V1beta1PriorityLevelConfigurationCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** `message` is a human-readable message indicating details about last transition. */
    message?: Maybe<Scalars["String"]>;
    /** `reason` is a unique, one-word, CamelCase reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** `status` is the status of the condition. Can be True, False, Unknown. Required. */
    status?: Maybe<Scalars["String"]>;
    /** `type` is the type of the condition. Required. */
    type?: Maybe<Scalars["String"]>;
};

/** PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects. */
export type V1beta1PriorityLevelConfigurationList = {
    __typename?: "V1beta1PriorityLevelConfigurationList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** `items` is a list of request-priorities. */
    items: Array<Maybe<V1beta1PriorityLevelConfiguration>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** PriorityLevelConfigurationReference contains information that points to the "request-priority" being used. */
export type V1beta1PriorityLevelConfigurationReference = {
    __typename?: "V1beta1PriorityLevelConfigurationReference";
    /** `name` is the name of the priority level configuration being referenced Required. */
    name: Scalars["String"];
};

/** PriorityLevelConfigurationSpec specifies the configuration of a priority level. */
export type V1beta1PriorityLevelConfigurationSpec = {
    __typename?: "V1beta1PriorityLevelConfigurationSpec";
    /**
     * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
     *  * How are requests for this priority level limited?
     *  * What should be done with requests that exceed the limit?
     */
    limited?: Maybe<V1beta1LimitedPriorityLevelConfiguration>;
    /** `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required. */
    type: Scalars["String"];
};

/** PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
export type V1beta1PriorityLevelConfigurationStatus = {
    __typename?: "V1beta1PriorityLevelConfigurationStatus";
    /** `conditions` is the current state of "request-priority". */
    conditions?: Maybe<
        Array<Maybe<V1beta1PriorityLevelConfigurationCondition>>
    >;
};

/** QueuingConfiguration holds the configuration parameters for queuing */
export type V1beta1QueuingConfiguration = {
    __typename?: "V1beta1QueuingConfiguration";
    /** `handSize` is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8. */
    handSize?: Maybe<Scalars["Int"]>;
    /** `queueLengthLimit` is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50. */
    queueLengthLimit?: Maybe<Scalars["Int"]>;
    /** `queues` is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64. */
    queues?: Maybe<Scalars["Int"]>;
};

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export type V1beta1ResourceAttributes = {
    __typename?: "V1beta1ResourceAttributes";
    /** Group is the API Group of the Resource.  "*" means all. */
    group?: Maybe<Scalars["String"]>;
    /** Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all. */
    name?: Maybe<Scalars["String"]>;
    /** Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview */
    namespace?: Maybe<Scalars["String"]>;
    /** Resource is one of the existing resource types.  "*" means all. */
    resource?: Maybe<Scalars["String"]>;
    /** Subresource is one of the existing resource types.  "" means none. */
    subresource?: Maybe<Scalars["String"]>;
    /** Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
    verb?: Maybe<Scalars["String"]>;
    /** Version is the API Version of the Resource.  "*" means all. */
    version?: Maybe<Scalars["String"]>;
};

/** ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request. */
export type V1beta1ResourcePolicyRule = {
    __typename?: "V1beta1ResourcePolicyRule";
    /** `apiGroups` is a list of matching API groups and may not be empty. "*" matches all API groups and, if present, must be the only entry. Required. */
    apiGroups: Array<Maybe<Scalars["String"]>>;
    /** `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list. */
    clusterScope?: Maybe<Scalars["Boolean"]>;
    /** `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains "*".  Note that "*" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true. */
    namespaces?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ "services", "nodes/status" ].  This list may not be empty. "*" matches all resources and, if present, must be the only entry. Required. */
    resources: Array<Maybe<Scalars["String"]>>;
    /** `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs and, if present, must be the only entry. Required. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export type V1beta1ResourceRule = {
    __typename?: "V1beta1ResourceRule";
    /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all. */
    resourceNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
     *  "*\/foo" represents the subresource 'foo' for all resources in the specified apiGroups.
     */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
    verbs: Array<Maybe<Scalars["String"]>>;
};

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.22. */
export type V1beta1Role = {
    __typename?: "V1beta1Role";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Rules holds all the PolicyRules for this Role */
    rules?: Maybe<Array<Maybe<V1beta1PolicyRule>>>;
};

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.22. */
export type V1beta1RoleBinding = {
    __typename?: "V1beta1RoleBinding";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** RoleRef contains information that points to the role being used */
    roleRef: V1beta1RoleRef;
    /** Subjects holds references to the objects the role applies to. */
    subjects?: Maybe<Array<Maybe<V1beta1Subject>>>;
};

/** RoleBindingList is a collection of RoleBindings Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBindingList, and will no longer be served in v1.22. */
export type V1beta1RoleBindingList = {
    __typename?: "V1beta1RoleBindingList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of RoleBindings */
    items: Array<Maybe<V1beta1RoleBinding>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RoleList is a collection of Roles Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleList, and will no longer be served in v1.22. */
export type V1beta1RoleList = {
    __typename?: "V1beta1RoleList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of Roles */
    items: Array<Maybe<V1beta1Role>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RoleRef contains information that points to the role being used */
export type V1beta1RoleRef = {
    __typename?: "V1beta1RoleRef";
    /** APIGroup is the group for the resource being referenced */
    apiGroup: Scalars["String"];
    /** Kind is the type of resource being referenced */
    kind: Scalars["String"];
    /** Name is the name of resource being referenced */
    name: Scalars["String"];
};

/** RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export type V1beta1RuleWithOperations = {
    __typename?: "V1beta1RuleWithOperations";
    /** APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required. */
    apiGroups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required. */
    apiVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required. */
    operations?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /**
     * Resources is a list of resources this rule applies to.
     *
     * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*\/scale' means all scale subresources. '*\/*' means all resources and their subresources.
     *
     * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
     *
     * Depending on the enclosing object, subresources might not be allowed. Required.
     */
    resources?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*". */
    scope?: Maybe<Scalars["String"]>;
};

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
export type V1beta1RunAsGroupStrategyOptions = {
    __typename?: "V1beta1RunAsGroupStrategyOptions";
    /** ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs. */
    ranges?: Maybe<Array<Maybe<V1beta1IdRange>>>;
    /** rule is the strategy that will dictate the allowable RunAsGroup values that may be set. */
    rule: Scalars["String"];
};

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
export type V1beta1RunAsUserStrategyOptions = {
    __typename?: "V1beta1RunAsUserStrategyOptions";
    /** ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs. */
    ranges?: Maybe<Array<Maybe<V1beta1IdRange>>>;
    /** rule is the strategy that will dictate the allowable RunAsUser values that may be set. */
    rule: Scalars["String"];
};

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md */
export type V1beta1RuntimeClass = {
    __typename?: "V1beta1RuntimeClass";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable. */
    handler: Scalars["String"];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Overhead structure represents the resource overhead associated with running a pod. */
    overhead?: Maybe<V1beta1Overhead>;
    /** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
    scheduling?: Maybe<V1beta1Scheduling>;
};

/** RuntimeClassList is a list of RuntimeClass objects. */
export type V1beta1RuntimeClassList = {
    __typename?: "V1beta1RuntimeClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is a list of schema objects. */
    items: Array<Maybe<V1beta1RuntimeClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export type V1beta1RuntimeClassStrategyOptions = {
    __typename?: "V1beta1RuntimeClassStrategyOptions";
    /** allowedRuntimeClassNames is an allowlist of RuntimeClass names that may be specified on a pod. A value of "*" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset. */
    allowedRuntimeClassNames: Array<Maybe<Scalars["String"]>>;
    /** defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod. */
    defaultRuntimeClassName?: Maybe<Scalars["String"]>;
};

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
export type V1beta1SeLinuxStrategyOptions = {
    __typename?: "V1beta1SELinuxStrategyOptions";
    /** rule is the strategy that will dictate the allowable labels that may be set. */
    rule: Scalars["String"];
    /** SELinuxOptions are the labels to be applied to the container */
    seLinuxOptions?: Maybe<V1SeLinuxOptions>;
};

/** Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export type V1beta1Scheduling = {
    __typename?: "V1beta1Scheduling";
    /** nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission. */
    nodeSelector?: Maybe<Scalars["JSON"]>;
    /** tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass. */
    tolerations?: Maybe<Array<Maybe<V1Toleration>>>;
};

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export type V1beta1SelfSubjectAccessReview = {
    __typename?: "V1beta1SelfSubjectAccessReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
    spec: V1beta1SelfSubjectAccessReviewSpec;
    /** SubjectAccessReviewStatus */
    status?: Maybe<V1beta1SubjectAccessReviewStatus>;
};

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type V1beta1SelfSubjectAccessReviewSpec = {
    __typename?: "V1beta1SelfSubjectAccessReviewSpec";
    /** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
    nonResourceAttributes?: Maybe<V1beta1NonResourceAttributes>;
    /** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
    resourceAttributes?: Maybe<V1beta1ResourceAttributes>;
};

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export type V1beta1SelfSubjectRulesReview = {
    __typename?: "V1beta1SelfSubjectRulesReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    spec: V1beta1SelfSubjectRulesReviewSpec;
    /** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
    status?: Maybe<V1beta1SubjectRulesReviewStatus>;
};

export type V1beta1SelfSubjectRulesReviewSpec = {
    __typename?: "V1beta1SelfSubjectRulesReviewSpec";
    /** Namespace to evaluate rules for. Required. */
    namespace?: Maybe<Scalars["String"]>;
};

/** ServiceAccountSubject holds detailed information for service-account-kind subject. */
export type V1beta1ServiceAccountSubject = {
    __typename?: "V1beta1ServiceAccountSubject";
    /** `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required. */
    name: Scalars["String"];
    /** `namespace` is the namespace of matching ServiceAccount objects. Required. */
    namespace: Scalars["String"];
};

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type V1beta1ServiceReference = {
    __typename?: "V1beta1ServiceReference";
    /** Name is the name of the service */
    name: Scalars["String"];
    /** Namespace is the namespace of the service */
    namespace: Scalars["String"];
    /** path is an optional URL path at which the webhook will be contacted. */
    path?: Maybe<Scalars["String"]>;
    /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
    port?: Maybe<Scalars["Int"]>;
};

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export type V1beta1StorageClass = {
    __typename?: "V1beta1StorageClass";
    /** AllowVolumeExpansion shows whether the storage class allow volume expand */
    allowVolumeExpansion?: Maybe<Scalars["Boolean"]>;
    /** Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature. */
    allowedTopologies?: Maybe<Array<Maybe<V1TopologySelectorTerm>>>;
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid. */
    mountOptions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Parameters holds the parameters for the provisioner that should create volumes of this storage class. */
    parameters?: Maybe<Scalars["JSON"]>;
    /** Provisioner indicates the type of the provisioner. */
    provisioner: Scalars["String"];
    /** Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete. */
    reclaimPolicy?: Maybe<Scalars["String"]>;
    /** VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature. */
    volumeBindingMode?: Maybe<Scalars["String"]>;
};

/** StorageClassList is a collection of storage classes. */
export type V1beta1StorageClassList = {
    __typename?: "V1beta1StorageClassList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of StorageClasses */
    items: Array<Maybe<V1beta1StorageClass>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export type V1beta1Subject = {
    __typename?: "V1beta1Subject";
    /** APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
    apiGroup?: Maybe<Scalars["String"]>;
    /** GroupSubject holds detailed information for group-kind subject. */
    group?: Maybe<V1beta1GroupSubject>;
    /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
    kind: Scalars["String"];
    /** Name of the object being referenced. */
    name: Scalars["String"];
    /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
    namespace?: Maybe<Scalars["String"]>;
    /** ServiceAccountSubject holds detailed information for service-account-kind subject. */
    serviceAccount?: Maybe<V1beta1ServiceAccountSubject>;
    /** UserSubject holds detailed information for user-kind subject. */
    user?: Maybe<V1beta1UserSubject>;
};

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export type V1beta1SubjectAccessReview = {
    __typename?: "V1beta1SubjectAccessReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
    spec: V1beta1SubjectAccessReviewSpec;
    /** SubjectAccessReviewStatus */
    status?: Maybe<V1beta1SubjectAccessReviewStatus>;
};

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type V1beta1SubjectAccessReviewSpec = {
    __typename?: "V1beta1SubjectAccessReviewSpec";
    /** Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. */
    extra?: Maybe<Scalars["JSON"]>;
    /** Groups is the groups you're testing for. */
    group?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
    nonResourceAttributes?: Maybe<V1beta1NonResourceAttributes>;
    /** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
    resourceAttributes?: Maybe<V1beta1ResourceAttributes>;
    /** UID information about the requesting user. */
    uid?: Maybe<Scalars["String"]>;
    /** User is the user you're testing for. If you specify "User" but not "Group", then is it interpreted as "What if User were not a member of any groups */
    user?: Maybe<Scalars["String"]>;
};

/** SubjectAccessReviewStatus */
export type V1beta1SubjectAccessReviewStatus = {
    __typename?: "V1beta1SubjectAccessReviewStatus";
    /** Allowed is required. True if the action would be allowed, false otherwise. */
    allowed: Scalars["Boolean"];
    /** Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true. */
    denied?: Maybe<Scalars["Boolean"]>;
    /** EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request. */
    evaluationError?: Maybe<Scalars["String"]>;
    /** Reason is optional.  It indicates why a request was allowed or denied. */
    reason?: Maybe<Scalars["String"]>;
};

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export type V1beta1SubjectRulesReviewStatus = {
    __typename?: "V1beta1SubjectRulesReviewStatus";
    /** EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete. */
    evaluationError?: Maybe<Scalars["String"]>;
    /** Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation. */
    incomplete: Scalars["Boolean"];
    /** NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
    nonResourceRules: Array<Maybe<V1beta1NonResourceRule>>;
    /** ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
    resourceRules: Array<Maybe<V1beta1ResourceRule>>;
};

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
export type V1beta1SupplementalGroupsStrategyOptions = {
    __typename?: "V1beta1SupplementalGroupsStrategyOptions";
    /** ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs. */
    ranges?: Maybe<Array<Maybe<V1beta1IdRange>>>;
    /** rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. */
    rule?: Maybe<Scalars["String"]>;
};

/** TokenRequest contains parameters of a service account token. */
export type V1beta1TokenRequest = {
    __typename?: "V1beta1TokenRequest";
    /** Audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver. */
    audience: Scalars["String"];
    /** ExpirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec" */
    expirationSeconds?: Maybe<Scalars["Float"]>;
};

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export type V1beta1TokenReview = {
    __typename?: "V1beta1TokenReview";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** TokenReviewSpec is a description of the token authentication request. */
    spec: V1beta1TokenReviewSpec;
    /** TokenReviewStatus is the result of the token authentication request. */
    status?: Maybe<V1beta1TokenReviewStatus>;
};

/** TokenReviewSpec is a description of the token authentication request. */
export type V1beta1TokenReviewSpec = {
    __typename?: "V1beta1TokenReviewSpec";
    /** Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver. */
    audiences?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Token is the opaque bearer token. */
    token?: Maybe<Scalars["String"]>;
};

/** TokenReviewStatus is the result of the token authentication request. */
export type V1beta1TokenReviewStatus = {
    __typename?: "V1beta1TokenReviewStatus";
    /** Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server. */
    audiences?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Authenticated indicates that the token was associated with a known user. */
    authenticated?: Maybe<Scalars["Boolean"]>;
    /** Error indicates that the token couldn't be checked */
    error?: Maybe<Scalars["String"]>;
    /** UserInfo holds the information about the user needed to implement the user.Info interface. */
    user?: Maybe<V1beta1UserInfo>;
};

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export type V1beta1UserInfo = {
    __typename?: "V1beta1UserInfo";
    /** Any additional information provided by the authenticator. */
    extra?: Maybe<Scalars["JSON"]>;
    /** The names of groups this user is a part of. */
    groups?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs. */
    uid?: Maybe<Scalars["String"]>;
    /** The name that uniquely identifies this user among all active users. */
    username?: Maybe<Scalars["String"]>;
};

/** UserSubject holds detailed information for user-kind subject. */
export type V1beta1UserSubject = {
    __typename?: "V1beta1UserSubject";
    /** `name` is the username that matches, or "*" to match all usernames. Required. */
    name: Scalars["String"];
};

/** ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export type V1beta1ValidatingWebhook = {
    __typename?: "V1beta1ValidatingWebhook";
    /** AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`. */
    admissionReviewVersions?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** WebhookClientConfig contains the information to make a TLS connection with the webhook */
    clientConfig: V1beta1WebhookClientConfig;
    /** FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore. */
    failurePolicy?: Maybe<Scalars["String"]>;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     *
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
     *
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
     *
     * Defaults to "Exact"
     */
    matchPolicy?: Maybe<Scalars["String"]>;
    /** The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required. */
    name: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    namespaceSelector?: Maybe<V1LabelSelector>;
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    objectSelector?: Maybe<V1LabelSelector>;
    /** Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. */
    rules?: Maybe<Array<Maybe<V1beta1RuleWithOperations>>>;
    /** SideEffects states whether this webhook has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown. */
    sideEffects?: Maybe<Scalars["String"]>;
    /** TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds. */
    timeoutSeconds?: Maybe<Scalars["Int"]>;
};

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead. */
export type V1beta1ValidatingWebhookConfiguration = {
    __typename?: "V1beta1ValidatingWebhookConfiguration";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** Webhooks is a list of webhooks and the affected resources and operations. */
    webhooks?: Maybe<Array<Maybe<V1beta1ValidatingWebhook>>>;
};

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export type V1beta1ValidatingWebhookConfigurationList = {
    __typename?: "V1beta1ValidatingWebhookConfigurationList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** List of ValidatingWebhookConfiguration. */
    items: Array<Maybe<V1beta1ValidatingWebhookConfiguration>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export type V1beta1VolumeAttachment = {
    __typename?: "V1beta1VolumeAttachment";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
    spec: V1beta1VolumeAttachmentSpec;
    /** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
    status?: Maybe<V1beta1VolumeAttachmentStatus>;
};

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export type V1beta1VolumeAttachmentList = {
    __typename?: "V1beta1VolumeAttachmentList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Items is the list of VolumeAttachments */
    items: Array<Maybe<V1beta1VolumeAttachment>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export type V1beta1VolumeAttachmentSource = {
    __typename?: "V1beta1VolumeAttachmentSource";
    /** PersistentVolumeSpec is the specification of a persistent volume. */
    inlineVolumeSpec?: Maybe<V1PersistentVolumeSpec>;
    /** Name of the persistent volume to attach. */
    persistentVolumeName?: Maybe<Scalars["String"]>;
};

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export type V1beta1VolumeAttachmentSpec = {
    __typename?: "V1beta1VolumeAttachmentSpec";
    /** Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). */
    attacher: Scalars["String"];
    /** The node that the volume should be attached to. */
    nodeName: Scalars["String"];
    /** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
    source: V1beta1VolumeAttachmentSource;
};

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export type V1beta1VolumeAttachmentStatus = {
    __typename?: "V1beta1VolumeAttachmentStatus";
    /** VolumeError captures an error encountered during a volume operation. */
    attachError?: Maybe<V1beta1VolumeError>;
    /** Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
    attached: Scalars["Boolean"];
    /** Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
    attachmentMetadata?: Maybe<Scalars["JSON"]>;
    /** VolumeError captures an error encountered during a volume operation. */
    detachError?: Maybe<V1beta1VolumeError>;
};

/** VolumeError captures an error encountered during a volume operation. */
export type V1beta1VolumeError = {
    __typename?: "V1beta1VolumeError";
    /** String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information. */
    message?: Maybe<Scalars["String"]>;
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    time?: Maybe<Scalars["String"]>;
};

/** VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export type V1beta1VolumeNodeResources = {
    __typename?: "V1beta1VolumeNodeResources";
    /** Maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is nil, then the supported number of volumes on this node is unbounded. */
    count?: Maybe<Scalars["Int"]>;
};

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
export type V1beta1WebhookClientConfig = {
    __typename?: "V1beta1WebhookClientConfig";
    /** caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used. */
    caBundle?: Maybe<Scalars["String"]>;
    /** ServiceReference holds a reference to Service.legacy.k8s.io */
    service?: Maybe<V1beta1ServiceReference>;
    /**
     * url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
     *
     * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
     *
     * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
     *
     * The scheme must be "https"; the URL must begin with "https://".
     *
     * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
     *
     * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
     */
    url?: Maybe<Scalars["String"]>;
};

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta1ContainerResourceMetricSource = {
    __typename?: "V2beta1ContainerResourceMetricSource";
    /** container is the name of the container in the pods of the scaling target */
    container: Scalars["String"];
    /** name is the name of the resource in question. */
    name: Scalars["String"];
    /** targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
    targetAverageUtilization?: Maybe<Scalars["Int"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    targetAverageValue?: Maybe<Scalars["String"]>;
};

/** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type V2beta1ContainerResourceMetricStatus = {
    __typename?: "V2beta1ContainerResourceMetricStatus";
    /** container is the name of the container in the pods of the scaling target */
    container: Scalars["String"];
    /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification. */
    currentAverageUtilization?: Maybe<Scalars["Int"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    currentAverageValue: Scalars["String"];
    /** name is the name of the resource in question. */
    name: Scalars["String"];
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V2beta1CrossVersionObjectReference = {
    __typename?: "V2beta1CrossVersionObjectReference";
    /** API version of the referent */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
    kind: Scalars["String"];
    /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
    name: Scalars["String"];
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set. */
export type V2beta1ExternalMetricSource = {
    __typename?: "V2beta1ExternalMetricSource";
    /** metricName is the name of the metric in question. */
    metricName: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    metricSelector?: Maybe<V1LabelSelector>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    targetAverageValue?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    targetValue?: Maybe<Scalars["String"]>;
};

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export type V2beta1ExternalMetricStatus = {
    __typename?: "V2beta1ExternalMetricStatus";
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    currentAverageValue?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    currentValue: Scalars["String"];
    /** metricName is the name of a metric used for autoscaling in metric system. */
    metricName: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    metricSelector?: Maybe<V1LabelSelector>;
};

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export type V2beta1HorizontalPodAutoscaler = {
    __typename?: "V2beta1HorizontalPodAutoscaler";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
    spec?: Maybe<V2beta1HorizontalPodAutoscalerSpec>;
    /** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
    status?: Maybe<V2beta1HorizontalPodAutoscalerStatus>;
};

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export type V2beta1HorizontalPodAutoscalerCondition = {
    __typename?: "V2beta1HorizontalPodAutoscalerCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** message is a human-readable explanation containing details about the transition */
    message?: Maybe<Scalars["String"]>;
    /** reason is the reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** status is the status of the condition (True, False, Unknown) */
    status: Scalars["String"];
    /** type describes the current condition */
    type: Scalars["String"];
};

/** HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects. */
export type V2beta1HorizontalPodAutoscalerList = {
    __typename?: "V2beta1HorizontalPodAutoscalerList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of horizontal pod autoscaler objects. */
    items: Array<Maybe<V2beta1HorizontalPodAutoscaler>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export type V2beta1HorizontalPodAutoscalerSpec = {
    __typename?: "V2beta1HorizontalPodAutoscalerSpec";
    /** maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. */
    maxReplicas: Scalars["Int"];
    /** metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. */
    metrics?: Maybe<Array<Maybe<V2beta1MetricSpec>>>;
    /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available. */
    minReplicas?: Maybe<Scalars["Int"]>;
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    scaleTargetRef: V2beta1CrossVersionObjectReference;
};

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export type V2beta1HorizontalPodAutoscalerStatus = {
    __typename?: "V2beta1HorizontalPodAutoscalerStatus";
    /** conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. */
    conditions: Array<Maybe<V2beta1HorizontalPodAutoscalerCondition>>;
    /** currentMetrics is the last read state of the metrics used by this autoscaler. */
    currentMetrics?: Maybe<Array<Maybe<V2beta1MetricStatus>>>;
    /** currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. */
    currentReplicas: Scalars["Int"];
    /** desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. */
    desiredReplicas: Scalars["Int"];
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastScaleTime?: Maybe<Scalars["String"]>;
    /** observedGeneration is the most recent generation observed by this autoscaler. */
    observedGeneration?: Maybe<Scalars["Float"]>;
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type V2beta1MetricSpec = {
    __typename?: "V2beta1MetricSpec";
    /** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
    containerResource?: Maybe<V2beta1ContainerResourceMetricSource>;
    /** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set. */
    external?: Maybe<V2beta1ExternalMetricSource>;
    /** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
    object?: Maybe<V2beta1ObjectMetricSource>;
    /** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
    pods?: Maybe<V2beta1PodsMetricSource>;
    /** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
    resource?: Maybe<V2beta1ResourceMetricSource>;
    /** type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
    type: Scalars["String"];
};

/** MetricStatus describes the last-read state of a single metric. */
export type V2beta1MetricStatus = {
    __typename?: "V2beta1MetricStatus";
    /** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
    containerResource?: Maybe<V2beta1ContainerResourceMetricStatus>;
    /** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
    external?: Maybe<V2beta1ExternalMetricStatus>;
    /** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
    object?: Maybe<V2beta1ObjectMetricStatus>;
    /** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
    pods?: Maybe<V2beta1PodsMetricStatus>;
    /** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
    resource?: Maybe<V2beta1ResourceMetricStatus>;
    /** type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
    type: Scalars["String"];
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta1ObjectMetricSource = {
    __typename?: "V2beta1ObjectMetricSource";
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    averageValue?: Maybe<Scalars["String"]>;
    /** metricName is the name of the metric in question. */
    metricName: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    target: V2beta1CrossVersionObjectReference;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    targetValue: Scalars["String"];
};

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta1ObjectMetricStatus = {
    __typename?: "V2beta1ObjectMetricStatus";
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    averageValue?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    currentValue: Scalars["String"];
    /** metricName is the name of the metric in question. */
    metricName: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    target: V2beta1CrossVersionObjectReference;
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type V2beta1PodsMetricSource = {
    __typename?: "V2beta1PodsMetricSource";
    /** metricName is the name of the metric in question */
    metricName: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    targetAverageValue: Scalars["String"];
};

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export type V2beta1PodsMetricStatus = {
    __typename?: "V2beta1PodsMetricStatus";
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    currentAverageValue: Scalars["String"];
    /** metricName is the name of the metric in question */
    metricName: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta1ResourceMetricSource = {
    __typename?: "V2beta1ResourceMetricSource";
    /** name is the name of the resource in question. */
    name: Scalars["String"];
    /** targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
    targetAverageUtilization?: Maybe<Scalars["Int"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    targetAverageValue?: Maybe<Scalars["String"]>;
};

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type V2beta1ResourceMetricStatus = {
    __typename?: "V2beta1ResourceMetricStatus";
    /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification. */
    currentAverageUtilization?: Maybe<Scalars["Int"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    currentAverageValue: Scalars["String"];
    /** name is the name of the resource in question. */
    name: Scalars["String"];
};

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ContainerResourceMetricSource = {
    __typename?: "V2beta2ContainerResourceMetricSource";
    /** container is the name of the container in the pods of the scaling target */
    container: Scalars["String"];
    /** name is the name of the resource in question. */
    name: Scalars["String"];
    /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
    target: V2beta2MetricTarget;
};

/** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type V2beta2ContainerResourceMetricStatus = {
    __typename?: "V2beta2ContainerResourceMetricStatus";
    /** Container is the name of the container in the pods of the scaling target */
    container: Scalars["String"];
    /** MetricValueStatus holds the current value for a metric */
    current: V2beta2MetricValueStatus;
    /** Name is the name of the resource in question. */
    name: Scalars["String"];
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V2beta2CrossVersionObjectReference = {
    __typename?: "V2beta2CrossVersionObjectReference";
    /** API version of the referent */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
    kind: Scalars["String"];
    /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
    name: Scalars["String"];
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type V2beta2ExternalMetricSource = {
    __typename?: "V2beta2ExternalMetricSource";
    /** MetricIdentifier defines the name and optionally selector for a metric */
    metric: V2beta2MetricIdentifier;
    /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
    target: V2beta2MetricTarget;
};

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export type V2beta2ExternalMetricStatus = {
    __typename?: "V2beta2ExternalMetricStatus";
    /** MetricValueStatus holds the current value for a metric */
    current: V2beta2MetricValueStatus;
    /** MetricIdentifier defines the name and optionally selector for a metric */
    metric: V2beta2MetricIdentifier;
};

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export type V2beta2HpaScalingPolicy = {
    __typename?: "V2beta2HPAScalingPolicy";
    /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
    periodSeconds: Scalars["Int"];
    /** Type is used to specify the scaling policy. */
    type: Scalars["String"];
    /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
    value: Scalars["Int"];
};

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export type V2beta2HpaScalingRules = {
    __typename?: "V2beta2HPAScalingRules";
    /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
    policies?: Maybe<Array<Maybe<V2beta2HpaScalingPolicy>>>;
    /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
    selectPolicy?: Maybe<Scalars["String"]>;
    /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
    stabilizationWindowSeconds?: Maybe<Scalars["Int"]>;
};

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export type V2beta2HorizontalPodAutoscaler = {
    __typename?: "V2beta2HorizontalPodAutoscaler";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    metadata?: Maybe<V1ObjectMeta>;
    /** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
    spec?: Maybe<V2beta2HorizontalPodAutoscalerSpec>;
    /** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
    status?: Maybe<V2beta2HorizontalPodAutoscalerStatus>;
};

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export type V2beta2HorizontalPodAutoscalerBehavior = {
    __typename?: "V2beta2HorizontalPodAutoscalerBehavior";
    /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
    scaleDown?: Maybe<V2beta2HpaScalingRules>;
    /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
    scaleUp?: Maybe<V2beta2HpaScalingRules>;
};

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export type V2beta2HorizontalPodAutoscalerCondition = {
    __typename?: "V2beta2HorizontalPodAutoscalerCondition";
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastTransitionTime?: Maybe<Scalars["String"]>;
    /** message is a human-readable explanation containing details about the transition */
    message?: Maybe<Scalars["String"]>;
    /** reason is the reason for the condition's last transition. */
    reason?: Maybe<Scalars["String"]>;
    /** status is the status of the condition (True, False, Unknown) */
    status: Scalars["String"];
    /** type describes the current condition */
    type: Scalars["String"];
};

/** HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export type V2beta2HorizontalPodAutoscalerList = {
    __typename?: "V2beta2HorizontalPodAutoscalerList";
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
    apiVersion?: Maybe<Scalars["String"]>;
    /** items is the list of horizontal pod autoscaler objects. */
    items: Array<Maybe<V2beta2HorizontalPodAutoscaler>>;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
    kind?: Maybe<Scalars["String"]>;
    /** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    metadata?: Maybe<V1ListMeta>;
};

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export type V2beta2HorizontalPodAutoscalerSpec = {
    __typename?: "V2beta2HorizontalPodAutoscalerSpec";
    /** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
    behavior?: Maybe<V2beta2HorizontalPodAutoscalerBehavior>;
    /** maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. */
    maxReplicas: Scalars["Int"];
    /** metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization. */
    metrics?: Maybe<Array<Maybe<V2beta2MetricSpec>>>;
    /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available. */
    minReplicas?: Maybe<Scalars["Int"]>;
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    scaleTargetRef: V2beta2CrossVersionObjectReference;
};

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export type V2beta2HorizontalPodAutoscalerStatus = {
    __typename?: "V2beta2HorizontalPodAutoscalerStatus";
    /** conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. */
    conditions: Array<Maybe<V2beta2HorizontalPodAutoscalerCondition>>;
    /** currentMetrics is the last read state of the metrics used by this autoscaler. */
    currentMetrics?: Maybe<Array<Maybe<V2beta2MetricStatus>>>;
    /** currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. */
    currentReplicas: Scalars["Int"];
    /** desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. */
    desiredReplicas: Scalars["Int"];
    /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
    lastScaleTime?: Maybe<Scalars["String"]>;
    /** observedGeneration is the most recent generation observed by this autoscaler. */
    observedGeneration?: Maybe<Scalars["Float"]>;
};

/** MetricIdentifier defines the name and optionally selector for a metric */
export type V2beta2MetricIdentifier = {
    __typename?: "V2beta2MetricIdentifier";
    /** name is the name of the given metric */
    name: Scalars["String"];
    /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    selector?: Maybe<V1LabelSelector>;
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type V2beta2MetricSpec = {
    __typename?: "V2beta2MetricSpec";
    /** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
    containerResource?: Maybe<V2beta2ContainerResourceMetricSource>;
    /** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
    external?: Maybe<V2beta2ExternalMetricSource>;
    /** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
    object?: Maybe<V2beta2ObjectMetricSource>;
    /** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
    pods?: Maybe<V2beta2PodsMetricSource>;
    /** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
    resource?: Maybe<V2beta2ResourceMetricSource>;
    /** type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
    type: Scalars["String"];
};

/** MetricStatus describes the last-read state of a single metric. */
export type V2beta2MetricStatus = {
    __typename?: "V2beta2MetricStatus";
    /** ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
    containerResource?: Maybe<V2beta2ContainerResourceMetricStatus>;
    /** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
    external?: Maybe<V2beta2ExternalMetricStatus>;
    /** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
    object?: Maybe<V2beta2ObjectMetricStatus>;
    /** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
    pods?: Maybe<V2beta2PodsMetricStatus>;
    /** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
    resource?: Maybe<V2beta2ResourceMetricStatus>;
    /** type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
    type: Scalars["String"];
};

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type V2beta2MetricTarget = {
    __typename?: "V2beta2MetricTarget";
    /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
    averageUtilization?: Maybe<Scalars["Int"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    averageValue?: Maybe<Scalars["String"]>;
    /** type represents whether the metric type is Utilization, Value, or AverageValue */
    type: Scalars["String"];
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    value?: Maybe<Scalars["String"]>;
};

/** MetricValueStatus holds the current value for a metric */
export type V2beta2MetricValueStatus = {
    __typename?: "V2beta2MetricValueStatus";
    /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
    averageUtilization?: Maybe<Scalars["Int"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    averageValue?: Maybe<Scalars["String"]>;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    value?: Maybe<Scalars["String"]>;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta2ObjectMetricSource = {
    __typename?: "V2beta2ObjectMetricSource";
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    describedObject: V2beta2CrossVersionObjectReference;
    /** MetricIdentifier defines the name and optionally selector for a metric */
    metric: V2beta2MetricIdentifier;
    /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
    target: V2beta2MetricTarget;
};

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta2ObjectMetricStatus = {
    __typename?: "V2beta2ObjectMetricStatus";
    /** MetricValueStatus holds the current value for a metric */
    current: V2beta2MetricValueStatus;
    /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
    describedObject: V2beta2CrossVersionObjectReference;
    /** MetricIdentifier defines the name and optionally selector for a metric */
    metric: V2beta2MetricIdentifier;
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type V2beta2PodsMetricSource = {
    __typename?: "V2beta2PodsMetricSource";
    /** MetricIdentifier defines the name and optionally selector for a metric */
    metric: V2beta2MetricIdentifier;
    /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
    target: V2beta2MetricTarget;
};

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export type V2beta2PodsMetricStatus = {
    __typename?: "V2beta2PodsMetricStatus";
    /** MetricValueStatus holds the current value for a metric */
    current: V2beta2MetricValueStatus;
    /** MetricIdentifier defines the name and optionally selector for a metric */
    metric: V2beta2MetricIdentifier;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ResourceMetricSource = {
    __typename?: "V2beta2ResourceMetricSource";
    /** name is the name of the resource in question. */
    name: Scalars["String"];
    /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
    target: V2beta2MetricTarget;
};

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type V2beta2ResourceMetricStatus = {
    __typename?: "V2beta2ResourceMetricStatus";
    /** MetricValueStatus holds the current value for a metric */
    current: V2beta2MetricValueStatus;
    /** Name is the name of the resource in question. */
    name: Scalars["String"];
};

/** Info contains versioning information. how we'll want to distribute that information. */
export type VersionInfo = {
    __typename?: "VersionInfo";
    buildDate: Scalars["String"];
    compiler: Scalars["String"];
    gitCommit: Scalars["String"];
    gitTreeState: Scalars["String"];
    gitVersion: Scalars["String"];
    goVersion: Scalars["String"];
    major: Scalars["String"];
    minor: Scalars["String"];
    platform: Scalars["String"];
};

export type GetDeploymentQueryVariables = Exact<{
    clusterId: Scalars["String"];
    namespace: Scalars["String"];
    name: Scalars["String"];
}>;

export type GetDeploymentQuery = { __typename?: "Query" } & {
    getDeployment?: V1Deployment};

export const GetDeploymentDocument = gql`
    query getDeployment(
        $clusterId: String!
        $namespace: String!
        $name: String!
    ) {
        getDeployment(
            clusterId: $clusterId
            namespace: $namespace
            name: $name
        ) {
            apiVersion
            kind
            metadata {
                name
            }
            spec {
                template {
                    spec {
                        containers {
                            image
                        }
                    }
                }
            }
            status {
                availableReplicas
                unavailableReplicas
                updatedReplicas
                readyReplicas
                replicas
            }
        }
    }
`;

/**
 * __useGetDeploymentQuery__
 *
 * To run a query within a React component, call `useGetDeploymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeploymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeploymentQuery({
 *   variables: {
 *      clusterId: // value for 'clusterId'
 *      namespace: // value for 'namespace'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetDeploymentQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetDeploymentQuery,
        GetDeploymentQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetDeploymentQuery, GetDeploymentQueryVariables>(
        GetDeploymentDocument,
        options
    );
}
export function useGetDeploymentLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetDeploymentQuery,
        GetDeploymentQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetDeploymentQuery, GetDeploymentQueryVariables>(
        GetDeploymentDocument,
        options
    );
}
export type GetDeploymentQueryHookResult = ReturnType<
    typeof useGetDeploymentQuery
>;
export type GetDeploymentLazyQueryHookResult = ReturnType<
    typeof useGetDeploymentLazyQuery
>;
export type GetDeploymentQueryResult = Apollo.QueryResult<
    GetDeploymentQuery,
    GetDeploymentQueryVariables
>;
