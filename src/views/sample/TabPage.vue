<template>
    <div class="pageView">
        <div class="pageBgbox">
            <div class="flex" style="justify-content:flex-end">
                <button type="button" class="btn posi" @click="goToPage('/guide?guideName=Tab')">가이드 페이지 </button>
            </div>
            <div class="guideTitle">탭 기본 스타일</div>
            
            <Tabs>
                <template #tabsubdec>
                    <div>우측에 텍스트 추가시 사용 슬롯</div>
                </template>
                <template #tabcons>
                    <div class="tabcontent" data-title="탭1">
                        <div class="tabpanel" role="tabpanel">tabcontent1</div>
                    </div>
                    <div class="tabcontent" data-title="탭2">
                        <div class="tabpanel" role="tabpanel">tabcontent2<br>tabcontent2</div>
                    </div>
                    <div class="tabcontent" data-title="탭버튼이 많이 크면 width가 유동적으로 ">
                        <div class="tabpanel" role="tabpanel">
                            <!-- 테이블 -->
                            <div class="tbl-wrap">
                                <div class="table-util flex space-between">
                                    <div class="btn-set-m flex">
                                        <button type="button" class="btn btn-ss">버튼 1</button>
                                        <button type="button" class="btn btn-ss">버튼 2</button>
                                    </div>
                                    <div class="btn-set-m flex align-end">
                                        <span class="table-total">조회결과 총 <strong>2</strong>건</span>
                                        <button type="button" class="btn btn-opt">
                                            <span class="ico-download"></span>파일다운로드
                                        </button>
                                        <select class="custom-select sm">
                                            <option value="10개">10개</option>
                                            <option value="20개">20개</option>
                                            <option value="30개">30개</option>
                                            <option value="40개">40개</option>
                                        </select>
                                    </div>
                                </div>
                                <AgGridVue :columnDefs="state.value" :rowData="state.rowData" :defaultColDef="state.defaultColDef"
                                    class="ag-theme-alpine" :domLayout="'autoHeight'">
                                </AgGridVue>
                            </div>

                            <!-- 페이징 컴포넌트 -->
                            <PageNavigation :cntPerPage='pager.size' :itemCount='pager.totalCnt' :currentPage="pager.current"
                                @changedPage="onChangedPage" />
                        </div>
                    </div>
                </template>
            </Tabs>
        </div>
    </div>
</template>
<script setup>
import { defineComponent, onMounted, reactive, computed, getCurrentInstance, nextTick, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCommFunc } from '@/core/helper/common.js';
import Tabs from '@/components/Tabs.vue';
const { goToPage } = useCommFunc();
const router = useRouter();
const route = useRoute();
const state = reactive({
    tabIndex: 1,
    tabNum: 0,
    tabLists: [
        {tablabel: 'tab1'},
        {tablabel: 'tab2'},
        {tablabel: 'tab3'},
        {tablabel: 'tab4'},
        {tablabel: 'tab5'}
    ],
    inputType1: {
        value: '',
        error: false
    },
    inputType2: {
        value: '',
        error: false
    },
    pagesize: 10,
    value: [
        { headerCheckboxSelection: true, checkboxSelection: true,  maxWidth: 30  },
        { headerName: '이름',  field: 'name', valueGetter: 'node.rowIndex + 1',  maxWidth: 100  },
        { headerName: '클라우드타입',
            field: 'cloudtype',
            flex: 1,
            cellRenderer: (params) => {
                return params.data.cloudtype === '가동중' ? `<span class="cloudtype">${params.data.cloudtype}</span> ` : `<span class="cloudtype error">${params.data.cloudtype}</span> `;
            }
        },
        { headerName: '접근가능여부',  field: 'abled', flex: 1, suppressSizeToFit: true },
        { headerName: '블록타입',  field: 'block',  flex: 1 },
        { headerName: '데이터센터',  field: 'data',  flex: 1 },
        { headerName: '존',  field: 'zone',  flex: 1 },
        { headerName: '위치',  field: 'positon',  flex: 1 },
        { headerName: '스토리지용량',  field: 'storage',  flex: 1 },
        { headerName: '동기화 일시',  field: 'synch', flex: 1 }
    ],
    rowData: [
        {
            name: 'DATASTORE1',
            cloudtype: '가동중',
            abled: '가능',
            block: 'SSD',
            data: 'DATACENTER NAME A',
            zone: 'Strato Internal Develo...Copy',
            positon: 'ds:///vmfs/volumes/644b6776-36b209...',
            storage: '2,408',
            synch: '2023.04.12 13:22:14'
        },
        {
            name: 'DATASTORE1',
            cloudtype: '비가동',
            abled: '가능',
            block: 'SSD',
            data: 'DATACENTER NAME A',
            zone: 'Strato Internal Develo...Copy',
            positon: 'ds:///vmfs/volumes/644b6776-36b209...',
            storage: '2,408',
            synch: '2023.04.12 13:22:14'
        }
    ],
    defaultColDef: {
        sortable: false,
        filter: false,
        resizable: false,
        headerClass: 'centered',
        cellClass: 'centered'
       
    }
});


// 페이징 처리
const pager = reactive({
    current: 1,
    size: computed(() => state.pagesize),
    offset: computed(() => (pager.current - 1) * pager.size),
    totalCnt: 10000
});
const onChangedPage = (num) => {
    console.log(num);
    pager.current = num;
    //api호출
};
// input error 체크
watch(state, () => {
    state.inputType1.value.length > 5 ? state.inputType1.error = true : state.inputType1.error = false;
    state.inputType2.value.length > 5 ? state.inputType2.error = true : state.inputType2.error = false;
});


</script>
<style>
.title_text{font-size:16px; font-weight:700; color:#333; margin:20px 0;}
.cloudtype{color:#00BA88; position: relative;display:inline-block;padding-left:13px;}
.cloudtype:after{content:""; display: block; width:6px;height:6px; border-radius:50%; background: #00BA88;position: absolute; left:0; top:17px}
.cloudtype.error{color:var(--error-color)}
.cloudtype.error:after{background-color:var(--error-color)}
</style>