<script lang="ts" setup>
import { useDealSliderStore } from '#imports';
import dayjs from 'dayjs';
import type { IDeal } from '~/types/deals.types';
import { useCreateComment } from './useCreateComments';
import { useComments } from './useComments';


const store = useDealSliderStore()

const {data, refetch, isLoading} = useComments()
const {commentRef, writeComment} = useCreateComment({refetch})


const card = data as unknown as IDeal






</script>


<template>
    <UiInput placeholder="left your comment here" v-model="commentRef" @keyup.enter="writeComment" />
    <UiSkeleton v-if="isLoading" class="w-full h-[76px] rounded mt-5"/>
    <div v-else-if="card">
        <div v-for="comment in card?.comments" :key="comment.$id" class="flex items-start mt-5">
            <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1" size="25"></Icon>
            <div class="border-border bg-black/20 rounded p-3 w-full">
                <div class="mb-2 text-sm">
                    comment {{ dayjs(comment.$createAt).format("HH:mm") }}
                </div>
                <p>{{ comment.text }}</p>
            </div>
        </div> 
    </div>

</template>