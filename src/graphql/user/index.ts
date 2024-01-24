import { gql } from "@apollo/client";

// Define the UsersStats query
export const GET_USERS_STATS = gql`
    query UsersStats {
        usersStats {
            usersCount
            kycCount
            postsCount
            contentCreators
            blockedUsersCount
            bannedUsersCount
            hashtagCount
            groupsCount
            sharedPosts
            repostsCount
            commentsCount
            likeCount
            stageCount
        }
    }
`;

export const GET_USERS_DATA = gql`
    query UsersData($page: Float!, $filter: String, $search: String) {
        usersData(page: $page, filter: $filter, search: $search) {
            next
            pageSize
            data {
                _id
                userName
                followersCount
                followingCount
                points
                avatar
                isVerified
                isBanned
                isBlocked
                isSCC
                postCount
                repostCount
                commentCount
                likeCount
                mintedNFTs
                boughtNFTs
                soldNFTs
                createdAt
                listedNFTs
            }
        }
    }
`;

export const GET_USERS_GRAPH_STATS = gql`
    query UsersGraphStats {
        usersGraphStats {
            date
            count
        }
    }
`;

export const TODAY_USERS_STATS = gql`
    query TodayUsersStats {
        todayUsersStats {
            usersCount
            kycCount
            postsCount
            contentCreators
            blockedUsersCount
            bannedUsersCount
            hashtagCount
            groupsCount
            sharedPosts
            repostsCount
            commentsCount
            likeCount
            stageCount
        }
    }
`;

export const BLOCK_USER_BY_ADMIN = gql`
    mutation BlockUserByAdmin($id: String!, $status: Boolean!) {
        blockUserByAdmin(id: $id, status: $status) {
            message
            success
        }
    }
`;

export const BAN_USER_BY_ADMIN = gql`
    mutation BanUserByAdmin($id: String!, $status: Boolean!) {
        banUserByAdmin(id: $id, status: $status) {
            message
            success
        }
    }
`;

export const EDIT_PROFILE_BY_ADMIN = gql`
    mutation EditProfileByAdmin($id: String!, $data: ProfileInputAdmin!) {
        editProfileByAdmin(id: $id, data: $data) {
            message
            success
        }
    }
`;

export const GET_WALLET_BY_ADDRESS = gql`
    query Wallet($address: String!) {
        wallet(address: $address) {
            _id
            address
            # isPrimary
            # isHidden
            # createdAt
            # updatedAt
            userId {
                userName
                avatar
                _id
            }
        }
    }
`;

export const GET_COLLECTION_BY_CHAIN_AND_ADDRESS = gql`
    query Collection($address: String!, $chain: String!) {
        collection(address: $address, chain: $chain) {
            _id
            name
            currency
            token_count
            chain
            chainId
            contract
            contract_name
            external_url
            # sample_images
            image
            banner
            supply
            owners_total
            owner
            sales_1d
            sales_7d
            sales_30d
            sales_total
            volume_1d
            volume_7d
            volume_30d
            volume_total
            floor_price
            highest_price
            average_price_1d
            average_price_7d
            average_price_30d
            average_price_total
            average_price_change_1d
            average_price_change_7d
            average_price_change_30d
            volume_change_1d
            volume_change_7d
            market_cap
            symbol
            description
            website
            email
            twitter
            twitch
            discord
            telegram
            github
            youtube
            facebook
            tiktok
            web
            instagram
            medium
            linkedin
            featured_url
            large_image_url
            ipfs_json_url
            ipfs_image_url
            # attributes
            erc_type
            deploy_block_number
            #  deployer_address
            verified
            is_content_creator
            is_auto_auction
            is_auto_mint
            listing_price
            listing_type
            auction_duration
            opensea_verified
            royalty
            amounts_total
            # collections_with_same_name
            price_symbol
            followers {
                _id
            }
            followersCount
            post {
                _id
                postViews
                reactionCount
                repostedBy {
                    _id
                }
                commentsBy {
                    _id
                }
                reactions {
                    emoji
                    count
                }
                commentsCount
                isRepost
                repostCount
                quoteCount
                scheduledAt
                createdAt
            }
            link_preview
        }
    }
`;

export const SCC_APPLIED_USERS = gql`
    query SCCAppliedUsers {
        SCCAppliedUsers {
            _id
            userName
            followersCount
            followingCount
            points
            avatar
            isVerified
            isBanned
            isBlocked
            isSCC
            twitter
            tiktok
            youtube
            instagram
        }
    }
`;

export const SCC_APPROVAL = gql`
    mutation SCCApprovel($userId: String!) {
        SCCApprovel(userId: $userId) {
            message
            success
        }
    }
`;
