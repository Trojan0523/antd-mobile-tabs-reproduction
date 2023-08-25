/*
 * @Author: BuXiongYu
 * @Date: 2023-08-25 17:10:58
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-08-25 17:30:21
 * @Description: 请填写简介
 */
import { useState, useMemo, useCallback, useEffect } from  'react'
import { Tabs } from 'antd-mobile'


const TabsComponent = (props: { showBodySizeFlag: boolean }) => {
    const { showBodySizeFlag } = props
    const [tab, setTab] = useState<string>('BODY_SIZE')

    const TabList = useMemo(() => {
        console.log('execute TabComponents', showBodySizeFlag)
        const originalTabList = [
          {
            key: 'BODY_SIZE',
            component: (
              <>
                <div>BODY_SIZE</div>
              </>
            ),
          },
          {
            key: 'PRODUCT_SIZE',
            component: (
              <>
                <div>PRODUCT_SIZE</div>  
              </>
            )
          },
        ]
        if (!showBodySizeFlag) {
          const filterList = originalTabList.filter((item) => item.key === 'PRODUCT_SIZE')
          return filterList
        }
        setTab('BODY_SIZE')
        return originalTabList
      }, [showBodySizeFlag])

  /**
   * 切换tab
   */
  const handleTabChange = useCallback((name: string | number) => {
    setTab(String(name))
  }, [])

  useEffect(() => {
    if (!showBodySizeFlag) {
      setTab('PRODUCT_SIZE')
    }
  }, [showBodySizeFlag])

    return (
        <div className='size-tab-list'>
            <Tabs onChange={handleTabChange} activeKey={tab}>
                {
                    TabList.map((item) => {
                        return (
                            <Tabs.Tab title={item.key} key={item.key} />
                        )
                    })
                }
            </Tabs>
        </div>
    )

   
}

export default TabsComponent