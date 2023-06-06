/* var checkbox = {
  init: function(){
    var that = this;
    
    $( '.mytable' ).each( function(){
        $parent = $( this );

        that.activeChildsByParent( $parent );
        
        $parent.find( 'input[type="checkbox"]:not(".all")' ).on( 'change', function(){
          var $thisParent = $( this ).closest( '.mytable' );
          that.activeChildsByParent( $thisParent );
        });

        $parent.find( 'input[type="checkbox"].all' ).on( 'change', function(){
          var $thisParent = $( this ).closest( '.mytable' );
          that.toggleAllChildsByParent( $thisParent );
        })

      });
  },
  toggleAllChildsByParent:function( $parent ){
    var $childs = $parent.find( 'input[type="checkbox"]:not(.all)' ),
        stateAll = $parent.find( 'input[type="checkbox"].all' ).prop( 'checked' );

    $childs.prop( 'checked', stateAll );
    this.activeChildsByParent( $parent );
  },
  activeChildsByParent:function( $parent ){
    var $allChilds = $parent.find( 'input[type="checkbox"].all' ),
        total = $parent.find( 'input[type="checkbox"]:not(.all)' ).length,
        actives = $parent.find( 'input[type="checkbox"]:not(.all):checked').length;

    if( actives < total){
      $allChilds.prop( 'checked', false );
    }else{
      $allChilds.prop( 'checked', true );
    }
  }
}

$( document ).ready( function(){
checkbox.init();
}) */

var checkbox = {
  init: function(){
    var that = this;
    
    $('.mytable').each(function(){
      var $parent = $(this);

      that.activeChildsByParent($parent);
      
      $parent.find('input[type="checkbox"]:not(".all")').on('change', function(){
        var $thisParent = $(this).closest('.mytable');
        that.activeChildsByParent($thisParent);
      });

      $parent.find('input[type="checkbox"].all').on('change', function(){
        var $thisParent = $(this).closest('.mytable');
        that.toggleAllChildsByParent($thisParent);
      });
    });

    // 添加 .mytable2 元素的事件监听
    $('.mytable2').each(function(){
      var $parent = $(this);

      that.activeChildsByParent($parent);
      
      $parent.find('input[type="checkbox"]:not(".all")').on('change', function(){
        var $thisParent = $(this).closest('.mytable2');
        that.activeChildsByParent($thisParent);
      });

      $parent.find('input[type="checkbox"].all').on('change', function(){
        var $thisParent = $(this).closest('.mytable2');
        that.toggleAllChildsByParent($thisParent);
      });
    });
  },
  toggleAllChildsByParent:function($parent){
    var $childs = $parent.find('input[type="checkbox"]:not(.all)'),
        stateAll = $parent.find('input[type="checkbox"].all').prop('checked');

    $childs.prop('checked', stateAll);
    this.activeChildsByParent($parent);
  },
  activeChildsByParent:function($parent){
    var $allChilds = $parent.find('input[type="checkbox"].all'),
        total = $parent.find('input[type="checkbox"]:not(.all)').length,
        actives = $parent.find('input[type="checkbox"]:not(.all):checked').length;

    if(actives < total){
      $allChilds.prop('checked', false);
    }else{
      $allChilds.prop('checked', true);
    }
  }
}

$(document).ready(function(){
  checkbox.init();
});